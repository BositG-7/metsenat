import { Navigate, Outlet } from "react-router-dom";
import { Main } from "layouts";

interface ProtectedRouteProps {
  allowed: boolean;
  redirectURL?: string;
}

const ProtectedRoute = ({ allowed = false, redirectURL = "/" }: ProtectedRouteProps) => {
  if (allowed)
    return (
      <Main>
        <Outlet />
      </Main>
    );

  return <Navigate to={redirectURL} />;
};

export default ProtectedRoute;
