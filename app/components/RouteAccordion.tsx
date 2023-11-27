"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import * as React from "react";

export default function RouteAccordion() {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="now">
        <AccordionTrigger className="flex items-center justify-between text-xl w-full group">
          <h1 className="font-medium">Now</h1>
        </AccordionTrigger>
        <AccordionContent className="px-2">
          This is the now page!
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Accordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header>
    <Accordion.Trigger className={className} {...props} ref={forwardedRef}>
      {children}
      <Plus
        className="transition-all group-data-[state=open]:rotate-45"
        weight="bold"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = Accordion.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content className={className} {...props} ref={forwardedRef}>
    <div>{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = Accordion.Content.displayName;
