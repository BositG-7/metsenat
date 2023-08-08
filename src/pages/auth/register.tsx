import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, InputBase, Paper, PasswordInput, Title } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Api } from "modules/auth";
import { IForm } from "modules/auth/types";

import { Logo } from "components";

interface RegisterProps {}

const schema = yup.object({
  username: yup.string().min(5).label("Username").required(),
  password: yup.string().min(5).label("Password").required(),
  firstName: yup.string().min(5).label("First name"),
  lastName: yup.string().min(5).label("Last name")
});

const Register = (props: RegisterProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm<IForm.Register>({
    initialValues: { username: "", password: "", firstName: "", lastName: "" },
    validate: yupResolver(schema)
  });

  const onSubmit = async (values: IForm.Register) => {
    setLoading(true);
    try {
      await Api.Register(values);
      navigate("/auth/login");
    } catch (err: any) {
      console.log("error = ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box h="100vh" sx={{ display: "grid", placeItems: "center" }}>
      <Flex direction="column" gap={48} align="center">
        <Logo />
        <Paper w={380} p={32} bg="white">
          <Title mb={44} size={24}>
            Register
          </Title>
          <form onSubmit={form.onSubmit(onSubmit)}>
            <Flex direction="column" gap={22}>
              <InputBase label="Username" {...form.getInputProps("username")} />
              <InputBase label="First name" {...form.getInputProps("firstName")} />
              <InputBase label="Last name" {...form.getInputProps("lastName")} />
              <PasswordInput label="Password" {...form.getInputProps("password")} />
              <Button loading={loading} type="submit">
                Register
              </Button>
            </Flex>
          </form>
        </Paper>
      </Flex>
    </Box>
  );
};

export default Register;
