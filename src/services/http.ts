import { notifications } from "@mantine/notifications";
import axios from "axios";
import config from "config";

import { getSession } from "./store";
import { StandardResponse } from "./types";

export { AxiosError } from "axios";

const http = axios.create({
  baseURL: config.api.baseURL,
  transformResponse: [
    (response: string) => {
      const data: StandardResponse = JSON.parse(response);

      if (data.status === "error") notifications.show({ message: `${data.message}`, color: "red" });

      if (data.status === "success") return data.data;

      return data.data;
    }
  ]
});

http.interceptors.request.use(
  request => {
    const { access } = getSession();

    // @ts-ignore
    request.headers = {
      ...request.headers,
      ...(access ? { Authorization: `Bearer ${access}` } : {})
    };

    return request;
  },
  error => Promise.reject(error)
);

export default http;
