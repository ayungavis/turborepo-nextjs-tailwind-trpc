import type { ComponentPropsWithoutRef } from "react";
import { Provider, Viewport } from "@radix-ui/react-toast";

import { ToastAlert } from "./ToastAlert";
import { useToast } from "./useToast";

export interface ToastProps
  extends Omit<ComponentPropsWithoutRef<"li">, "onPause"> {
  duration?: number;
  onPause?: () => void;
}

export const Toast = ({ ..._props }: ToastProps) => {
  const { toasts } = useToast();

  return (
    <Provider swipeDirection="down">
      {toasts.map(({ id, ...props }) => {
        return <ToastAlert id={id} key={id} {...props} />;
      })}
      <Viewport className="fixed right-0 top-6 z-toast px-1.5 py-10 sm:top-10 sm:px-10" />
    </Provider>
  );
};
