import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import {
  signUpFormInitialState,
  authTypes,
  loginFormInitialState,
} from "../../../constants/enums";
import { allRoutes } from "../../../constants/routs";
import "./LoginSignupForm.scss";

const LoginSignupForm = (props) => {
  const navigate = useNavigate();
  const { type } = props;
  const [form, setForm] = useState(
    type == authTypes.signUp ? signUpFormInitialState : loginFormInitialState
  );
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
    setError(null);

    setForm((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  };

  const validateInput = (form) => {
    if (type == authTypes.signUp) {
      console.log(form.name, form.email, form.password);
      if (form.name != null && form.email != null && form.password != null) {
        return true;
      }
    } else if (type == authTypes.login) {
      if (form.email != null && form.password != null) {
        return true;
      }
    } else {
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInput(form)) {
      {
        type == authTypes.signUp
          ? AuthService.register(form.name, form.email, form.password).then(
              (response) => {
                {
                  response.data.message == "User registered successfully!" &&
                    navigate(allRoutes.login);
                }
              },
              (error) => {
                setError(
                  error.code == "ERR_BAD_REQUEST" &&
                    "Error: Email is already in use!"
                );
              }
            )
          : AuthService.login(form.email, form.password).then(
              (res) => {
                console.log(res.message);
                localStorage.getItem("user") && navigate(allRoutes.profile);
              },
              (error) => {
                setError(
                  error.code == "ERR_BAD_REQUEST" && "Error: Bad credentials!"
                );
              }
            );
      }
    } else {
      alert("Fill all the fields");
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        {type == authTypes.signUp && (
          <div className="login-form-item">
            <input
              type="text"
              name="name"
              className="login-form-item-email form-control"
              placeholder="Name"
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <div className="login-form-item">
          <input
            type="email"
            name="email"
            className="login-form-item-email form-control"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="login-form-item">
          <input
            type="password"
            name="password"
            className="login-form-item-password form-control"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && (
          <div className="warning-message">
            <i class="fas fa-exclamation-circle"></i> {error}
          </div>
        )}
        <div className="form-item">
          <button
            type="submit"
            className="login-form-item-submit btn btn-block btn-primary mb-4"
          >
            {type == authTypes.signUp ? authTypes.signUp : authTypes.login}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignupForm;
