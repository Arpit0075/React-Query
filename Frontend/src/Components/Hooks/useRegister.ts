import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/signup";
import { useMutation } from "@tanstack/react-query";
import { RegisterStateType } from "../../types/RegisterStateType";

export const useRegister = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (newUser: RegisterStateType) => createUser(newUser),
    onSuccess: () => {
      // Success actions
      navigate("/");
    },
  });
  return { mutation };
};
