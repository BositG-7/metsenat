import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { useAuth } from "modules/auth/context";
import { Application, Auth, Dashboard } from "pages";

import AuthProtected from "./auth-protected";
import ProtectedRoute from "./protected-route";

const Routes = () => {
  const { user } = useAuth();

  return (
    <Switch>
      {/* ANY USER */}
      <Route path="" element={<Application />} />

      {/* ADMIN USER */}
      <Route path="dashboard" element={<ProtectedRoute allowed={user?.isAdmin!} redirectURL={user ? "/" : "/auth/login"} />}>
        <Route index element={<Dashboard.Dashboard user={user} />} />

        {/* STUDENTS */}
        <Route path="students">
          <Route index element={<Dashboard.Students.Students />} />
          <Route path="add" element={<Dashboard.Students.Add />} />
          <Route path=":studentID" element={<Dashboard.Students.Single />} />
          <Route path="*" index element={<Navigate to="/dashboard/students" />} />
        </Route>

        {/* SPONSORS  */}
        <Route path="sponsors">
          <Route index element={<Dashboard.Sponsors.Sponsors />} />
          <Route path=":sponsorID" element={<Dashboard.Sponsors.Single />} />
          <Route path="*" index element={<Navigate to="/dashboard/sponsors" />} />
        </Route>
      </Route>

      {/* AUTH */}
      <Route path="auth" element={<AuthProtected allowed={!user} redirectURL="/dashboard" />}>
        <Route path="login" element={<Auth.Login />} />
        <Route path="register" element={<Auth.Register />} />
        <Route path="*" index element={<Navigate to="/auth/login" />} />
      </Route>

      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/auth/login"} />} />
    </Switch>
  );
};

export default Routes;
