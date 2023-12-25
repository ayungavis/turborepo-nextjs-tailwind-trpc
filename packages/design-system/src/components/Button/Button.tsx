import { useCallback } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

import { buttonTheme } from "./Button.theme";
import type { ButtonTheme } from "./Button.theme";

/**
 * Represents the properties of a base button component.
 */
interface ButtonBaseProps {
  /**
   * The optional left icon element for a component.
   * @type {ReactNode}
   */
  leftIcon?: ReactNode;
  /**
   * The optional right icon element to display.
   * @type {ReactNode}
   */
  rightIcon?: ReactNode;
}

/**
 * Interface for the props of a button link component.
 */
export interface ButtonLinkProps
  extends Omit<ComponentPropsWithoutRef<"a">, "color"> {
  /**
   * Specifies the optional property `as` with a value of `'a'`.
   * @type {'a'}
   */
  as?: "a";
  /**
   * Indicates whether the item is external or not.
   * @type {boolean}
   */
  external?: boolean;
  /**
   * The URL of a web page or resource.
   * @type {string}
   */
  href: string;
}

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color"> {
  /**
   * Specifies the optional property `as` with a value of `'button'`.
   * @type {'button'}
   */
  as?: "button";
}

/**
 * Interface representing the props for a button component.
 * Extends the ComponentPropsWithoutRef<'button'> and ButtonTheme interfaces.
 */
export type ButtonOrLinkProps = (ButtonLinkProps | ButtonProps) &
  ButtonBaseProps &
  ButtonTheme;

/**
 * A custom button component that can be used in React applications.
 */
const Button = ({
  children,
  className,
  leftIcon,
  rightIcon,
  fullWidth,
  shape,
  variant,
  ...props
}: ButtonOrLinkProps) => {
  // Conditionally render between <NextLink>, <a> or <button> depending on props
  // useCallback to prevent unnecessary re-rendering
  const Component = useCallback(
    ({ children: _children, ..._props }: ButtonOrLinkProps) => {
      if (_props.as === "a") {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { external, href, as, ...baseLinkProps } = _props;

        // External link
        if (external) {
          const externalLinkProps = {
            target: "_blank",
            rel: "noopener",
            href,
            ...baseLinkProps,
          };
          return <a {...externalLinkProps}>{_children}</a>;
        }

        // Internal link
        return (
          <Link {...baseLinkProps} href={href}>
            {_children}
          </Link>
        );
      } else {
        const { ...buttonProps } = _props;
        // @ts-expect-error - as prop is not a valid prop for button elements
        return <button {...buttonProps}>{_children}</button>;
      }
    },
    [],
  );

  /**
   * Extracts specific style properties from the given props object and returns them as a new object.
   */
  const styleProps = (({
    variant = "primary",
    size = "md",
    fullWidth = false,
    shape = "rounded",
    as,
  }) => ({
    variant,
    size,
    fullWidth,
    shape,
    as,
  }))({ ...props, fullWidth, shape, variant });

  /**
   * Validates that a button component has either children or an aria-label prop.
   */
  if (typeof children === "undefined" && !props["aria-label"]) {
    throw new Error(
      "Button components must have either children or an aria-label prop",
    );
  }

  return (
    <Component
      {...props}
      className={buttonTheme({ ...styleProps, class: className })}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </Component>
  );
};

Button.displayName = "Button";

export { Button };
