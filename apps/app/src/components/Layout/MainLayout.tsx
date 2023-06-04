import { type ComponentPropsWithoutRef } from "react";
import Head from "next/head";

import { cn } from "@myapp/utils";

export type MainLayoutProps = ComponentPropsWithoutRef<"main">;

export const MainLayout = ({
  className,
  children,
  ...props
}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <main className={cn(className)} {...props}>
        {children}
      </main>
    </>
  );
};
