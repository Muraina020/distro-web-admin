import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import rectangle from "../../assets/img/rectangle.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./loginPage.css";
import axios from "../../api/axiosInstance";
import { useAuthContext } from "../../context/AuthProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAdmin, admin } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [credential, setCredential] = useState({
    phoneNoOrEmail: "",
    password: "",
    accesToken: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, phoneNoOrEmail } = credential;
    if (password === "" || phoneNoOrEmail === "") return;

    try {
      const response = await axios.post("/login", {
        phoneNoOrEmail,
        password,
      });

      const accessToken = response.data.accessToken;

      const data = {
        ...credential,
        accessToken,
      };

      localStorage.setItem("user", JSON.stringify(data));
      setCredential(data);
      setAdmin(data);
      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCredential({ ...credential, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="contain">
      <div className="left">
        <img src={rectangle} alt="" />
      </div>

      <form onSubmit={handleSubmit} className="right">
        <h3>Welcome back to Distro</h3>
        <span>Please sign in to your dashboard</span>

        <div className="first-inp">
          <input
            type="email"
            name="phoneNoOrEmail"
            value={credential.phoneNoOrEmail}
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div className="second-inp">
          <input
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            name="password"
            value={credential.password}
            placeholder="password"
          />
          <span className="eye-icon">
            <RemoveRedEyeIcon onClick={handleTogglePassword} />
          </span>
        </div>
        <div className="remember">
          <div className="box">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <Link to="/reset">
            <span className="forgot">Forgot Password?</span>
          </Link>
        </div>

        <button
          type="submit"
          className="w-[330px] bg-[#00A69C] text-white cursor-pointer h-[50px] text-[20px] font-semibold"
        >
          Login
        </button>
      </form>

      {/* Toast container for displaying messages */}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
