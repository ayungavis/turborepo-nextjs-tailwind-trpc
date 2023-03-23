import { forwardRef, type ElementRef, type Ref } from "react";

import { cn } from "@myapp/utils";

import {
  typographyVariants,
  type TypographyVariants,
} from "./Typography.variants";

type TypographyType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TypographyProps<T extends TypographyType> = {
  as?: T;
  // eslint-disable-next-line no-undef
} & JSX.IntrinsicElements[T] &
  TypographyVariants;

type DefaultProps = {
  as: "p";
  // eslint-disable-next-line no-undef
} & JSX.IntrinsicElements["p"] &
  TypographyVariants;

type RefFor<T extends TypographyType> = ElementRef<T>;

const Typography = forwardRef(
  <T extends TypographyType = "p">(
    {
      as: Tag = "p",
      className,
      children,
      size = "text-md",
      ...props
    }: TypographyProps<T> | DefaultProps,
    ref: Ref<RefFor<T>>,
  ) => {
    return (
      <Tag
        className={cn(typographyVariants({ size }), className)}
        {...props}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        ref={ref as any}
      >
        {children}
      </Tag>
    );
  },
);

Typography.displayName = "Typography";

export { Typography };
