import { forwardRef } from "react";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { Trigger } from "@radix-ui/react-dropdown-menu";

import { Button } from "~/components/Button";
import type { ButtonOrLinkProps } from "~/components/Button";
import { ChevronDownIcon } from "~/components/CustomIcon";
import { dropdownTheme } from "./Dropdown.theme";
import { useDropdown } from "./DropdownProvider";

export interface DropdownTriggerProps
  extends ComponentPropsWithoutRef<typeof Trigger> {
  icon?: ReactNode;
  unStyled?: boolean;
  buttonProps?: ButtonOrLinkProps;
}

const DropdownTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  PropsWithChildren<DropdownTriggerProps>
>(
  (
    { className, icon, unStyled = false, children, buttonProps, ...props },
    ref,
  ) => {
    const _props = useDropdown();
    const { trigger: triggerClasses, triggerContent } = dropdownTheme(_props);

    return (
      <Trigger asChild ref={ref} {...props}>
        <div>
          <Button
            className={
              !unStyled ? triggerClasses({ ..._props, className }) : className
            }
            rightIcon={icon ?? <ChevronDownIcon />}
            shape="default"
            variant="unstyled"
            {...buttonProps}
          >
            <div className={triggerContent()}>{children}</div>
          </Button>
        </div>
      </Trigger>
    );
  },
);

DropdownTrigger.displayName = "DropdownTrigger";

export { DropdownTrigger };
