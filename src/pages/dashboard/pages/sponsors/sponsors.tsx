import { useState } from "react";
import { Badge, Box, Title } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useSponsors } from "modules/dashboard/hooks";

interface SponsorsProps {}

const Sponsors = (props: SponsorsProps) => {
  const [page, setPage] = useState(1);
  const { count, sponsors, isLoading } = useSponsors({ page });

  return (
    <Box>
      <Title>Sponsors Page</Title>
      <Box>
        <DataTable
          withBorder
          records={sponsors}
          fetching={isLoading}
          columns={[
            { accessor: "id", title: "#", width: 50, render: (record, idx) => <Badge variant="light">{idx + 1}</Badge> },
            { accessor: "fullName", title: "F.I.SH" },
            { accessor: "phone", title: "Telfon raqam" },
            { accessor: "amount", title: "Homiylik summasi" },
            { accessor: "spend_money.spent_money", title: "Sarflangan summa" },
            { accessor: "createdAt", title: "Sana" },
            { accessor: "status", title: "Holati" }
          ]}
          totalRecords={count}
          recordsPerPage={10}
          page={page}
          onPageChange={p => setPage(p)}
        />
      </Box>
    </Box>
  );
};

export default Sponsors;
