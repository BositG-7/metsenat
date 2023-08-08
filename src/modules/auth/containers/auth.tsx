import React from "react";
import { LoadingOverlay } from "@mantine/core";
import { clearSession } from "services";

import { AuthContext } from "../context";
import { useProfile } from "../hooks";
import { IEntity } from "../types";

interface AuthProps {
  children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  const [{ user, isLoading }, setState] = useProfile();

  if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;

  const methods = {
    login: (user: IEntity.User) => setState(prev => ({ ...prev, user })),
    logout: () => {
      clearSession();
      setState(prev => ({ ...prev, user: null }));
    }
  };

  return <AuthContext.Provider value={{ user, isLoading, methods }}>{children}</AuthContext.Provider>;
};

export default Auth;
