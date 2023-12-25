import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import type { ToastProps } from "./Toast";
import type { ToastAlertProps } from "./ToastAlert/ToastAlert";
import type { ToastAlertVariants } from "./ToastAlert/ToastAlert.theme";

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY_DEFAULT = 7000;

export type ToasterToast = ToastProps & {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  variant?: ToastAlertVariants["variant"];
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

const genId = () => {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
};

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
      duration?: ToasterToast["duration"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string, duration: number) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, duration ?? TOAST_REMOVE_DELAY_DEFAULT);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId, duration = TOAST_REMOVE_DELAY_DEFAULT } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId, duration);
      } else {
        state.toasts.forEach((_toast) => {
          addToRemoveQueue(_toast.id, duration);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: ((state: State) => void)[] = [];

let memoryState: State = { toasts: [] };

const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

type _Toast = Omit<ToasterToast, "id">;

const toast = ({ ...props }: Partial<ToastAlertProps>) => {
  const id = genId();

  const update = (_props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ..._props, id },
    });
  const dismiss = () =>
    dispatch({ type: "DISMISS_TOAST", toastId: id, duration: props.duration });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      action: props.action ?? true,
      // @ts-expect-error - This is a hack to make sure the toast is open
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
};

export interface UseToast {
  toasts: ToasterToast[];
  toast: (props: _Toast) => ReturnType<typeof toast>;
  dismiss: (toastId?: string) => void;
}

const useToast = (): UseToast => {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
};

export { toast, useToast };
