import type { HTMLProps, ReactElement, ReactNode } from "react";
import {
  Children,
  isValidElement,
  cloneElement as reactCloneElement,
} from "react";
import type { ClassProp } from "tailwind-variants";

interface cloneElement extends HTMLProps<ReactNode> {
  element: ReactNode;
  themeStyle?: (props: ClassProp) => string;
}

export const cloneElement = ({
  element,
  themeStyle,
  ...props
}: cloneElement) => {
  if (isValidElement(element)) {
    return (
      <>
        {Children.map(element, (child) => {
          const originalClassName = (child.props as HTMLProps<ReactNode>)
            ?.className;

          return reactCloneElement(child as ReactElement, {
            className: themeStyle
              ? themeStyle({
                  className: originalClassName, // overriding icon classNames
                })
              : originalClassName,
            ...props,
          });
        })}
      </>
    );
  }
  return <></>;
};
