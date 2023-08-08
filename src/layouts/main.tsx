import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionIcon, Avatar, Badge, Box, Button, Flex, Input, SegmentedControl } from "@mantine/core";
import { useAuth } from "modules/auth/context";

import { LogoDashboard } from "components";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const { user, methods } = useAuth();
  const [path, setPath] = useState("");
  const navigate = useNavigate();

  const onChange = (newPath: string) => {
    setPath(newPath);
    navigate(newPath);
  };

  return (
    <>
      <Box>
        <Flex sx={{ boxShadow: "0px 25px 40px 0px rgba(0, 0, 0, 0.03)" }} bg="white" py={20} px={120} justify="space-between" align="center">
          <LogoDashboard />
          <Flex gap={40} align="center">
            <Flex gap={10} align="center">
              <Badge>{user?.firstName}</Badge>
              <Avatar>A</Avatar>
            </Flex>
            <ActionIcon onClick={methods.logout} variant="filled" size="lg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H20V8.5C20 6.5 17.8881 5 16 5H6.5C5.57205 5.00099 4.68238 5.37006 4.02622 6.02622C3.37006 6.68238 3.00099 7.57205 3 8.5V23.5C3.00099 24.428 3.37006 25.3176 4.02622 25.9738C4.68238 26.6299 5.57205 26.999 6.5 27H16.5C17.428 26.999 18.3176 26.6299 18.9738 25.9738C19.6299 25.3176 19.999 24.428 20 23.5V17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16Z"
                  fill="currentColor"
                />
                <path
                  d="M28.7069 15.2931L23.7069 10.2931C23.5178 10.1135 23.2661 10.0148 23.0053 10.0182C22.7445 10.0215 22.4954 10.1266 22.311 10.311C22.1266 10.4954 22.0215 10.7445 22.0182 11.0053C22.0148 11.2661 22.1135 11.5178 22.2931 11.7069L25.5856 15H20V17H25.5856L22.2931 20.2931C22.1964 20.3851 22.119 20.4954 22.0655 20.6177C22.0121 20.7401 21.9837 20.8718 21.982 21.0053C21.9803 21.1388 22.0053 21.2712 22.0556 21.3949C22.1059 21.5185 22.1804 21.6308 22.2748 21.7252C22.3692 21.8196 22.4815 21.8941 22.6051 21.9444C22.7288 21.9947 22.8612 22.0197 22.9947 22.018C23.1282 22.0163 23.2599 21.9879 23.3822 21.9345C23.5046 21.881 23.6149 21.8036 23.7069 21.7069L28.7069 16.7069C28.8943 16.5194 28.9995 16.2651 28.9995 16C28.9995 15.7349 28.8943 15.4806 28.7069 15.2931Z"
                  fill="currentColor"
                />
              </svg>
            </ActionIcon>
          </Flex>
        </Flex>

        <Flex bg="#eee" py={20} px={120} justify="space-between" align="center">
          <SegmentedControl
            size="lg"
            value={path}
            onChange={onChange}
            color="blue"
            data={[
              { label: "Dashboard", value: "" },
              { label: "Homiylar", value: "sponsors" },
              { label: "Talabalar", value: "students" }
            ]}
          />
          <Flex gap={20} justify="center">
            <Input placeholder="Izlash..." />
            <Button variant="filled">Filter</Button>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  );
};

export default Main;
