import { forwardRef } from "react";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { CheckboxItem, ItemIndicator } from "@radix-ui/react-dropdown-menu";

import { cloneIcon } from "@shui/utils";

import { CheckCircleIcon } from "~/components/CustomIcon";
import { dropdownTheme } from "./Dropdown.theme";
import { useDropdown } from "./DropdownProvider";

export interface DropdownItemProps
  extends ComponentPropsWithoutRef<typeof CheckboxItem> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const DropdownItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  PropsWithChildren<DropdownItemProps>
>(({ className, children, leftIcon, rightIcon, ...props }, ref) => {
  const _props = useDropdown();
  const { item: itemClasses } = dropdownTheme(_props);
  return (
    <CheckboxItem className={itemClasses({ className })} ref={ref} {...props}>
      <div className="flex items-center gap-2">
        {cloneIcon(leftIcon, { size: 16 })}
        <span className="flex-1">{children}</span>
      </div>
      {rightIcon ? (
        cloneIcon(rightIcon, { size: 16 })
      ) : (
        <ItemIndicator>
          {props.checked === true && <CheckCircleIcon size={16} />}
        </ItemIndicator>
      )}
    </CheckboxItem>
  );
});

DropdownItem.displayName = "DropdownItem";

export { DropdownItem };
