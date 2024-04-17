import { BASE_URL } from "../utils/url";
import { RegisterStateType } from "../types/RegisterStateType";
import { LoginStateType } from "../types/LoginStateType";

export const createUser = async (newUser: RegisterStateType) => {
  let url = BASE_URL + "auth/register";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  return response.json();
};

export const requestLogin = async (userDetails: LoginStateType) => {
  let url = BASE_URL + "auth/login";
  const response: any = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });

  return response.json();
};
