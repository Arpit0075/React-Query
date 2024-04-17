import jwt_decode from "jwt-decode";
import { useIsIserAuthenticated } from "./useIsUserAuthenticated";

export const useIsUserAuthorized = (authorId: any) => {
  const token: any = localStorage.getItem("token");

  const { isAuthenticated } = useIsIserAuthenticated();
  let isAuthorized: boolean = false;

  if (!isAuthenticated) {
    isAuthorized = false;
    return { isAuthorized };
  }

  if (!token) {
    isAuthorized = false;
    return { isAuthorized };
  }
  let decoded: any = jwt_decode(token);
  let decodedId = decoded.user._id;

  if (authorId && decodedId && authorId === decodedId && isAuthenticated) {
    isAuthorized = true;
    return { isAuthorized };
  }
  return { isAuthorized };
};
