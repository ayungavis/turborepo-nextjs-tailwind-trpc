import { Children, cloneElement, isValidElement } from "react";
import type { Attributes, ReactElement, ReactNode } from "react";

/**
 * Clones an icon element with optional additional props.
 * @param {ReactNode} icon - The icon element to clone.
 * @param {Attributes & P} [props] - Additional props to apply to the cloned icon.
 * @returns {ReactNode} - The cloned icon element with the applied props.
 */
export function cloneIcon<P extends object>(
  icon: ReactNode,
  props?: Attributes & P,
): ReactNode {
  return Children.map(icon, (child) =>
    isValidElement(child) ? cloneElement(child as ReactElement, props) : child,
  );
}
