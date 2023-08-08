import get from "lodash/get";

import { IEntity } from "./types";

export const Student = (item: any): IEntity.Student => ({
  id: get(item, "id") || "",
  fullName: get(item, "full_name") || "",
  degree: get(item, "degree") || "",
  tuitionFee: get(item, "tuition_fee") || "",
  phone: get(item, "phone") || "",
  createdAt: get(item, "created_at") || "",
  university: get(item, "university") || ""
});
export const Sponsors = (item: any): IEntity.Sponsors => ({
  id: get(item, "id") || "",
  fullName: get(item, "full_name") || "",
  amount: get(item, "amount") || "",
  spend_money: get(item, "spend_money") || "",
  phone: get(item, "phone") || "",
  createdAt: get(item, "created_at") || "",
  status: get(item, "status") || ""
});
