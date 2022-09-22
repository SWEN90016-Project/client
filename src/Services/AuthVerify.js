import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import AuthService from "./auth.service";
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
const AuthVerify = () => {
  let location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const decodedJwt = parseJwt(user.accessToken);
      console.log(decodedJwt.exp * 1000);
      console.log(Date.now());
      if (decodedJwt.exp * 1000 < Date.now()) {
        localStorage.removeItem("user");
        window.location.reload();
      }
    }
  }, [location]);
};
export default AuthVerify;
