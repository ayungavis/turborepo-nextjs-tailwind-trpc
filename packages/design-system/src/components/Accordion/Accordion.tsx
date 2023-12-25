import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

import type { AccordionVariants } from "./Accordion.theme";
import { accordionTheme } from "./Accordion.theme";
import { AccordionContent } from "./AccordionContent";
import { AccordionTrigger } from "./AccordionTrigger";

// Couldn't find relevant for Root props
type RootProps = Parameters<typeof RadixAccordion.Root>[0];

type AccordionProps = ComponentPropsWithoutRef<"div"> &
  AccordionVariants &
  Omit<RootProps, "type"> & {
    type?: "single" | "multiple";
  };

export const Accordion = ({
  className,
  children,
  type = "single",
  ...props
}: PropsWithChildren<AccordionProps>) => {
  const { root } = accordionTheme();

  const rootProps = {
    collapsible: true,
  };

  return (
    <RadixAccordion.Root
      className={root({
        className,
      })}
      // @ts-expect-error: 'type' is specified more than once, so this usage will be overwritten.
      type={type}
      {...rootProps}
      {...(props as RootProps)}
    >
      {children}
    </RadixAccordion.Root>
  );
};

Accordion.Item = RadixAccordion.Item;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
