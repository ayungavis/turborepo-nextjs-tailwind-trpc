import "~/styles/globals.css";
import "@myapp/design-system/styles.css";
import type { AppType } from "next/app";
import { Inter } from "@next/font/google";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/services/api";

type MyAppType = AppType<{ session: Session | null }>;

const inter = Inter({ subsets: ["latin"] });

const MyApp: MyAppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <SessionProvider session={session}>
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
