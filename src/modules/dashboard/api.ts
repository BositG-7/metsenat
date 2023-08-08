import { http, RequestFn } from "services";

import { IApi } from "./types";

export const Students: RequestFn<IApi.Students.Request, IApi.Students.Response> = params => http.get("/students/", { params });
export const Sponsors: RequestFn<IApi.Sponsors.Request, IApi.Sponsors.Response> = () => http.get("/sponsors/");
