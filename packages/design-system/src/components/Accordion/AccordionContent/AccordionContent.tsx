import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Content } from "@radix-ui/react-accordion";

import { accordionTheme } from "~/components/Accordion/Accordion.theme";

export type AccordionContentProps = ComponentPropsWithoutRef<"div">;

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => {
  const { content } = accordionTheme();

  return (
    <Content
      className={content({
        className,
      })}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Content>
  );
});

AccordionContent.displayName = "AccordionContent";
