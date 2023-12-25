"use client";

import type { ComponentPropsWithoutRef } from "react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { AccordionHeaderProps } from "@radix-ui/react-accordion";
import { Header, Trigger } from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

import { cn } from "@shui/utils";

import { accordionTheme } from "~/components/Accordion/Accordion.theme";
import { MinusIcon, PlusIcon } from "~/components/CustomIcon";
import type { CustomIconProps } from "~/components/CustomIcon";
import type { HeadingProps } from "~/components/Heading";
import { Heading } from "~/components/Heading";

export interface AccordionTriggerProps
  extends ComponentPropsWithoutRef<"button"> {
  headerProps?: AccordionHeaderProps;
  customIconProps?: CustomIconProps;
  titleProps?: HeadingProps<"h3">;
}

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(
  (
    { children, className, customIconProps, headerProps, titleProps, ...props },
    forwardedRef,
  ) => {
    const { header, trigger, chevron } = accordionTheme();
    const [open, setOpen] = useState<boolean>(false);

    const triggerRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(forwardedRef, () => triggerRef.current!);

    useEffect(() => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "data-state"
          ) {
            const dataState = triggerRef.current?.getAttribute("data-state");
            setOpen(dataState === "open");
          }
        });
      });

      if (triggerRef.current) {
        observer.observe(triggerRef.current, { attributes: true });
      }

      // Clean up the observer when the component unmounts
      return () => observer.disconnect();
    }, []);

    return (
      <Header
        className={header({
          className: headerProps?.className,
        })}
        {...headerProps}
      >
        <Trigger
          className={cn(
            { "!pb-5": open },
            trigger({
              className,
            }),
          )}
          {...props}
          ref={triggerRef}
        >
          <Heading
            {...titleProps}
            as="h3"
            className={cn(
              "text-base font-medium sm:text-xl",
              titleProps?.className,
            )}
          >
            {children}
          </Heading>
          {open ? (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MinusIcon
                {...customIconProps}
                className={chevron({
                  className: customIconProps?.className,
                })}
              />
            </motion.div>
          ) : (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PlusIcon
                {...customIconProps}
                className={chevron({
                  className: customIconProps?.className,
                })}
              />
            </motion.div>
          )}
        </Trigger>
      </Header>
    );
  },
);

AccordionTrigger.displayName = "AccordionTrigger";
