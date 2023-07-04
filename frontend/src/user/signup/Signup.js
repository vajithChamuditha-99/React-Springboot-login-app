import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignupContainer from "../components/login-signup-container/LoginSignupContainer";
import { authTypes } from "../../constants/enums";
import { allRoutes } from "./../../constants/routs";
import "./Signup.scss";

const Signup = (props) => {

  return <LoginSignupContainer type={authTypes.signUp} />;
};

export default Signup;
