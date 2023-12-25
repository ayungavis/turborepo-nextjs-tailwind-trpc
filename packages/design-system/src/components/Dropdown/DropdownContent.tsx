import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react";
import { Content, Portal } from "@radix-ui/react-dropdown-menu";

import { dropdownTheme } from "./Dropdown.theme";
import { useDropdown } from "./DropdownProvider";

export interface DropdownContentProps
  extends ComponentPropsWithoutRef<typeof Content> {
  icon?: ReactNode;
}

const DropdownContent = forwardRef<
  ElementRef<typeof Content>,
  DropdownContentProps
>(({ className, children, ...props }, ref) => {
  const _props = useDropdown();
  const { content: contentClasses } = dropdownTheme(_props);
  return (
    <Portal>
      <Content
        align="start"
        className={contentClasses({ className })}
        ref={ref}
        sideOffset={8}
        {...props}
      >
        {children}
      </Content>
    </Portal>
  );
});

DropdownContent.displayName = "DropdownContent";

export { DropdownContent };
