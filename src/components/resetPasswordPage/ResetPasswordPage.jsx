import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import rectangle from "../../assets/img/rectangle.png";
import { useNavigate } from "react-router-dom";
import {
  CircularProgress,
  CircularProgressLabel,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import "./resetPasswordPage.css";
import axios from "axios";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    navigate("/");
  };

  const handleNewResetPaswword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };
      // const body = JSON.stringify(email);
      
      const res = await axios.post(
        `https://apps-1.lampnets.com/distro/profiles/recovery-code?email=${email}`,
       email
      );

      if (res && res.status === 200) {
        setLoading(false);
        setSuccessMsg(res?.data.message);
        localStorage.setItem('recoveryCode', res?.data.recoveryCode)
        localStorage.setItem('userEmail', email)
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
        }, 2000)
        setShowError(false)
       
        setTimeout(() => {
        navigate('/otp')
       }, 2000)
      }
    } catch (err) {
      setErrMsg(err.response.data.message);
      setLoading(false);
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 2000)
      setShowSuccess(false)
    }
  };

  return (
    <>
      {showError && (
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>
           {errMsg}
          </AlertDescription>
        </Alert>
      )}
       {showSuccess && (
        <Alert status="success">
          <AlertIcon />
          <AlertDescription>
           {successMsg}
          </AlertDescription>
        </Alert>
      )}
      <form>
        <div className="reset-contain">
          <div className="reset-left">
            <img src={rectangle} alt="" />
          </div>
          <div className="reset-right">
            <span className="reset-back-icon" onClick={handleReset}>
              <IoArrowBack className="reicon" />
              <span className="reset-text">Back</span>
            </span>
            <div className="reset-text-div">
              <h3>Reset password</h3>
              <span>
                Enter your email address, and we'll send you a link to reset
                your password.
              </span>
            </div>
            <div className="reset-first-inp">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <button className="reset-login" onClick={handleNewResetPaswword}>
              Reset password
              {loading && <CircularProgress size='30px' />}
            </button>
            <p className="reset-errmsg" aria-live="assertive">
              {errMsg}
            </p>
            <p className="reset-success-msg" aria-live="assertive">
              {successMsg}
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordPage;
