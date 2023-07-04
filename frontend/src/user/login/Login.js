import React, { useEffect } from "react";
import LoginSignupContainer from "../components/login-signup-container/LoginSignupContainer";
import { authTypes } from "../../constants/enums";
import { allRoutes } from "./../../constants/routs";
import "./Login.scss";

const Login = (props) => {
  // 

  return <LoginSignupContainer type={authTypes.login} />;
};

export default Login;
