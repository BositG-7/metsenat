import { useEffect, useMemo, useState } from "react";
import { notifications } from "@mantine/notifications";

import { IApi } from "../types";
import { Api, Mappers, Types } from "..";

interface Props extends Partial<IApi.Students.Request> {}
export const useStudents = ({ page, limit }: Props) => {
  const [state, setState] = useState<Types.IQuery.Students>({ students: [], count: 0, isLoading: true });

  const defaultParams: IApi.Students.Request = useMemo(
    () => ({
      page: page || 1,
      limit: limit || 10
    }),
    [page, limit]
  );

  useEffect(() => {
    setState(prev => ({ ...prev, isLoading: true }));
    const request = async () => {
      try {
        const { data } = await Api.Students(defaultParams);

        const students = (data.results || []).map(Mappers.Student);

        setState({ students, count: data.count, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: "red" });
        setState({ students: [], count: 0, isLoading: true });
      }
    };

    request();
  }, [defaultParams]);

  return state;
};
