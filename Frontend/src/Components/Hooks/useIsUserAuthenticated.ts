import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const useIsIserAuthenticated = () => {
  const token: any = localStorage.getItem("token");
  const [isAuthenticated, setIsauthenticated] = useState(false);

  useEffect(() => {
    if (!token) {
      setIsauthenticated(false);
      return;
    }
    let decoded: any = jwt_decode(token);
    let currentTime = new Date().getTime() / 1000; //in seconds

    if (currentTime > decoded.exp) {
      localStorage.removeItem("token");
      setIsauthenticated(false);
      return;
    }
    setIsauthenticated(true);
    return;
  }, [token]);

  return { isAuthenticated, setIsauthenticated };
};
