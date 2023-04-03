import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@myapp/utils";

import { buttonVariants, type ButtonVariants } from "./Button.variants";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & ButtonVariants;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants(), className)} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
