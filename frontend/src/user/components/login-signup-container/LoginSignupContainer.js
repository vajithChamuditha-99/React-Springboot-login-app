import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginSignupForm from "../login-signup-form/LoginSignupForm";
import { authTypes } from "../../../constants/enums";
import "./LoginSignupContainer.scss";

const LoginSignupContainer = (props) => {
  useEffect(() => {
    console.log(type);
  }, []);
  const { type } = props;
  return (
    <div className="login-signup-container">
      <div className="login-signup-header">
        <div className="login-signup-header-title">
          {type == authTypes.signUp ? authTypes.signUp : authTypes.login} to
          Treinetic Application
        </div>
      </div>
      <div className="login-signup-content">
        <LoginSignupForm
          type={type == authTypes.signUp ? authTypes.signUp : authTypes.login}
        />
        <span className="signup-link">
          {type === authTypes.signUp ? (
            <span className="login-link">
              Already have an account? <Link to="/login">Login!</Link>
            </span>
          ) : (
            <span className="signup-link">
              New user? <Link to="/signup">Sign up!</Link>
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default LoginSignupContainer;
