import { useEffect, useMemo, useState } from "react";
import { notifications } from "@mantine/notifications";

import { IApi } from "../types";
import { Api, Mappers, Types } from "..";

interface Props extends Partial<IApi.Sponsors.Request> {}
export const useSponsors = ({ page, limit }: Props) => {
  const [state, setState] = useState<Types.IQuery.Sponsors>({ sponsors: [], count: 0, isLoading: true });

  const defaultParams: IApi.Sponsors.Request = useMemo(
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
        const { data } = await Api.Sponsors(defaultParams);

        const sponsors = (data.results || []).map(Mappers.Sponsors);

        setState({ sponsors, count: data.count, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: "red" });
        setState({ sponsors: [], count: 0, isLoading: true });
      }
    };

    request();
  }, [defaultParams]);

  return state;
};
