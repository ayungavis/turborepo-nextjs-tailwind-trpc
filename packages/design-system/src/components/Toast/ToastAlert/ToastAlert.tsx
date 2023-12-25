import type { ReactNode } from "react";
import { useCallback } from "react";
import * as Toast from "@radix-ui/react-toast";
import { motion } from "framer-motion";

import { cn } from "@shui/utils";

import { XCloseIcon } from "~/components/CustomIcon";
import { HighlightIcon } from "~/components/HighlightIcon";
import type { ToasterToast } from "../useToast";
import { toastAlertTheme } from "./ToastAlert.theme";
import type { ToastAlertVariants } from "./ToastAlert.theme";

export interface ToastAlertProps extends ToasterToast {
  variant?: ToastAlertVariants["variant"];
  icon?: ReactNode;
}

export const ToastAlert = ({
  variant = "primary",
  icon,
  title,
  description,
  action,
  className,
  ...props
}: ToastAlertProps) => {
  const {
    wrapper,
    title: titleClass,
    description: descriptionClass,
  } = toastAlertTheme({
    variant,
    centerContents: !(description && action),
  });

  const renderIcon = useCallback(() => {
    if (icon) return icon;
    switch (variant) {
      case "primary":
        return <HighlightIcon brand variant="primary" />;
      case "neutral":
        return <HighlightIcon brand variant="neutral" />;
      case "success":
        return <HighlightIcon brand variant="success" />;
      case "alert":
        return <HighlightIcon brand variant="alert" />;
      case "warning":
        return <HighlightIcon brand variant="warning" />;
    }
  }, [variant, icon])();

  return (
    <Toast.Root {...props} asChild className="toast-root">
      <motion.li
        animate={{
          x: "var(--radix-toast-swipe-move-x, 0)",
          opacity: 1,
        }}
        className={cn(wrapper(), className)}
        exit={{ x: "100%", opacity: 0 }}
        initial={{ x: "100%", opacity: 0 }}
      >
        {renderIcon}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Toast.Title asChild>
              <p className={titleClass()}>{title}</p>
            </Toast.Title>
            {description && (
              <Toast.Description asChild>
                <p className={descriptionClass()}>{description}</p>
              </Toast.Description>
            )}
          </div>
          {action && (
            <Toast.Action altText="action" asChild className="w-min">
              {action}
            </Toast.Action>
          )}
        </div>
        <Toast.Close asChild>
          <button className="flex items-start justify-center p-2">
            <XCloseIcon size={16} />
          </button>
        </Toast.Close>
      </motion.li>
    </Toast.Root>
  );
};
