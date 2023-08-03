import { useSession } from "next-auth/react";
import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};
export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  //TODO - add auth check
  /*  const { status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <div>Something went wrong</div>; */
  return <React.Fragment>{children}</React.Fragment>;
};
