import { http, RequestFn } from "services";

import { IApi } from "./types";

export const Login: RequestFn<IApi.Login.Request, IApi.Login.Response> = data => http.post("/users/login/", data);

export const Register: RequestFn<IApi.Register.Request, IApi.Register.Response> = ({ firstName: first_name, lastName: last_name, ...args }) =>
  http.post("/users/register/", { first_name, last_name, ...args });

export const Profile: RequestFn<IApi.Profile.Request, IApi.Profile.Response> = () => http.get("/users/profile/");

export const Refresh: RequestFn<IApi.Refresh.Request, IApi.Refresh.Response> = params => http.post("/users/token/refresh/");
