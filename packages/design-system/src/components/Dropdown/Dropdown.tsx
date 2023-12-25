import type { ComponentPropsWithoutRef } from "react";
import { Root as DropdownRoot } from "@radix-ui/react-dropdown-menu";

import { DropdownContent } from "./DropdownContent";
import { DropdownItem } from "./DropdownItem";
import type { DropdownProviderProps } from "./DropdownProvider";
import DropdownProvider from "./DropdownProvider";
import { DropdownTrigger } from "./DropdownTrigger";

export type DropdownProps = ComponentPropsWithoutRef<typeof DropdownRoot> &
  DropdownProviderProps;

export const Dropdown = ({
  disabled = false,
  variant,
  ...props
}: DropdownProps) => {
  return (
    <DropdownProvider disabled={disabled as boolean} variant={variant}>
      <DropdownRoot {...props} {...(disabled && { open: false })} />
    </DropdownProvider>
  );
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;
