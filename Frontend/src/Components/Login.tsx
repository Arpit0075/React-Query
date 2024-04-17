import { Button, TextField, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "./Hooks/useLogin";
import { LoginStateType } from "../types/LoginStateType";

function Login() {
  const [login, setLogin] = useState<LoginStateType>({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate } = useLogin();

  const handleLogin = (): void => {
    mutate(login);
    setLogin({ email: "", password: "" });
  };

  return (
    <Container sx={{ textAlign: "center", marginTop: "5rem" }}>
      <h2>Login</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="enter your email"
          variant="outlined"
          type="email"
          name="email"
          sx={{
            input: { color: "whitesmoke" },
            label: { color: "whitesmoke" },
            fieldset: { borderColor: "whitesmoke" },
          }}
          value={login.email}
          onChange={handleChange}
          autoComplete="off"
        />

        <TextField
          variant="outlined"
          label="enter your password"
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          sx={{
            input: { color: "whitesmoke" },
            label: { color: "whitesmoke" },
            fieldset: { borderColor: "whitesmoke" },
          }}
          autoComplete="off"
        />
        <Button variant="outlined" onClick={handleLogin}>
          Login
        </Button>
        <Link to="/register">Register Page</Link>
      </Box>
    </Container>
  );
}

export default Login;
