import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Box, Container } from "@mui/material";
import { useRegister } from "./Hooks/useRegister";
import { RegisterStateType } from "../types/RegisterStateType";

function Register() {
  const [register, setRegister] = useState<RegisterStateType>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const { mutation } = useRegister();
  const handleRegister = () => {
    mutation.mutate(register);
    setRegister({ name: "", email: "", password: "" });
  };

  return (
    <Container sx={{ textAlign: "center", marginTop: "5rem" }}>
      <div className="form">
        <h2>Register</h2>
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
            label="enter your Name"
            variant="outlined"
            type="text"
            name="name"
            sx={{
              input: { color: "whitesmoke" },
              label: { color: "whitesmoke" },
              fieldset: { borderColor: "whitesmoke" },
            }}
            value={register.name}
            onChange={handleChange}
            autoComplete="off"
          />
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
            value={register.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <TextField
            label="enter your password"
            variant="outlined"
            type="password"
            name="password"
            sx={{
              input: { color: "whitesmoke" },
              label: { color: "whitesmoke" },
              fieldset: { borderColor: "whitesmoke" },
            }}
            value={register.password}
            onChange={handleChange}
            autoComplete="off"
          />
          <Button variant="outlined" onClick={handleRegister}>
            Register
          </Button>
          <Link to="/login">Login Page</Link>
        </Box>
      </div>
    </Container>
  );
}

export default Register;
