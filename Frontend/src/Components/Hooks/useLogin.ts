import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { requestLogin } from "../../api/signup";
import { LoginStateType } from "../../types/LoginStateType";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (userDetails: LoginStateType) => requestLogin(userDetails),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      console.log("Login successful");
      navigate("/");
    },
    onError: (error) => {
      // Handle login error
      console.error("Login error:", error);
      // You can show an error message to the user or perform other actions here
    },
  });
  return { mutate };
};
