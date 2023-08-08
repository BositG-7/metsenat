import { useState } from "react";
import { Badge, Box, Title } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useStudents } from "modules/dashboard/hooks";

interface StudentsProps {}

const Students = (props: StudentsProps) => {
  const [page, setPage] = useState(1);
  const { count, students, isLoading } = useStudents({ page });

  return (
    <Box>
      <Title>Students Page</Title>
      <Box>
        <DataTable
          withBorder
          records={students}
          fetching={isLoading}
          columns={[
            { accessor: "id", title: "#", width: 50, render: (record, idx) => <Badge variant="light">{idx + 1}</Badge> },
            { accessor: "fullName", title: "F.I.SH" },
            { accessor: "degree", title: "Talabalik turi" },
            { accessor: "university", title: "OTM" },
            { accessor: "tuitionFee", title: "Ajratilingan summa" },
            { accessor: "phone", title: "Telfon raqam" }
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

export default Students;
