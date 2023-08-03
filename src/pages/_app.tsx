import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/lib-client/trpcWrapper";
import "@/styles/globals.css";
import { AuthLayout } from "@/components-common/AuthLayout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
