import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { allRoutes } from "../../constants/routs";
import "./Profile.scss";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate(allRoutes.signUp);
  };

  return (
    <div className="profile-container">
      <div className="profile-container-success">
        <span className="text">You have successfully signed in!!</span>
      </div>
      <div className="profile-container-button">
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
};

export default Profile;
