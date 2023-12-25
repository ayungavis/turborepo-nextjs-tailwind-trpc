import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementType } from "react";

export type PolymorphicProps<Element extends ElementType, Props> = Props &
  Omit<ComponentPropsWithoutRef<Element>, "as"> & {
    as?: Element;
  };

// taken from : https://github.com/total-typescript/react-typescript-tutorial/blob/main/src/08-advanced-patterns/72-as-prop-with-forward-ref.solution.tsx
type FixedForwardRef = <T, P = object>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => JSX.Element;

export const fixedForwardRef = forwardRef as FixedForwardRef;
