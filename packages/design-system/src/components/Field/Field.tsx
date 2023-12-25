import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@shui/utils";

import { fieldTheme } from "./Field.theme";
import type { FieldVariants } from "./Field.theme";

export interface FieldProps {
  label?: string;
  labelRight?: string;
  message?: string;
  error?: boolean;
}

export interface FieldFullProps
  extends FieldProps,
    ComponentPropsWithoutRef<"div">,
    FieldVariants {
  labelProps?: ComponentPropsWithoutRef<"label">;
  htmlFor?: string;
}

export const Field = ({
  label,
  labelRight,
  children,
  message,
  error,
  labelProps,
  size,
  className,
  htmlFor,
  ...props
}: FieldFullProps) => {
  const {
    base,
    label: labelStyle,
    labelContainer: labelContainerStyle,
    message: messageStyle,
  } = fieldTheme({ className, size });
  return (
    <div {...props} className={cn(base(), className)}>
      {(label ?? labelRight) && (
        <label
          htmlFor={htmlFor}
          {...labelProps}
          className={labelContainerStyle({ className: labelProps?.className })}
        >
          {label && <span className={labelStyle()}>{label}</span>}
          {labelRight && <span className={labelStyle()}>{labelRight}</span>}
        </label>
      )}
      {children}
      {message && (
        <p className={messageStyle()} data-error={error ? "" : undefined}>
          {message}
        </p>
      )}
    </div>
  );
};
