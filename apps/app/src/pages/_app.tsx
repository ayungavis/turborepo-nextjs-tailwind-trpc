/* eslint-disable react/prop-types */
import "~/styles/globals.css";
import "@myapp/design-system/styles.css";
import type { AppType } from "next/app";
import { Inter } from "@next/font/google";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { MainLayout } from "~/components/Layout";
import { api } from "~/services/api";

const inter = Inter({ subsets: ["latin"] });

type MyAppType = AppType<{ session: Session | null }>;

const MyApp: MyAppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Layout = Component.layout || MainLayout;

  return (
    <SessionProvider session={session}>
      <div className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
