import type { PropsWithChildren } from "react";

import type { PolymorphicProps } from "~/types/system";
import { headingTheme } from "./Heading.theme";
import type { HeadingVariants } from "./Heading.theme";

type HeadingElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps<Element extends HeadingElementType> =
  PropsWithChildren<PolymorphicProps<Element, HeadingVariants>>;

export const Heading = <Element extends HeadingElementType>({
  children,
  as,
  className,
  ...props
}: HeadingProps<Element>) => {
  // Component is the element that will be rendered
  const Component = as ?? "h1";

  return (
    <Component
      {...props}
      className={headingTheme({
        className,
      })}
    >
      {children}
    </Component>
  );
};
