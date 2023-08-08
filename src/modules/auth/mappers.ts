import get from "lodash/get";

import { IEntity } from "./types";

export const User = (item: any): IEntity.User => ({
  id: get(item, "id") || "",
  username: get(item, "username") || "",
  firstName: get(item, "first_name") || "",
  lastName: get(item, "last_name") || "",
  isAdmin: get(item, "is_staff") || false
});
