import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@myapp/utils";

export type MainLayoutProps = ComponentPropsWithoutRef<"main">;

export const MainLayout = ({
  className,
  children,
  ...props
}: MainLayoutProps) => {
  return (
    <main className={cn(className)} {...props}>
      {children}
    </main>
  );
};
