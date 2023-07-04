import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signup from "./user/signup/Signup";
import Login from "./user/login/Login";
import Profile from "./user/profile/Profile";
import { allRoutes } from "./constants/routs";
import "./App.scss";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    !localStorage.getItem("user")
      ? navigate(allRoutes.login)
      : navigate(allRoutes.profile);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={allRoutes.login} element={<Login />} />
        <Route path={allRoutes.signUp} element={<Signup />} />
        <Route path={allRoutes.profile} element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
