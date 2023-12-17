import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import rectangle from "../../assets/img/rectangle.png";
import "./resetPasswordPage.css"
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    // Add logic to handle adding driver (validate fields, upload image, etc.)
    // Once the driver is successfully added, navigate to the success page
    navigate("/");
  };
  return (
   
    <div className='reset-contain'>
    <div className='reset-left'>
        <img src={rectangle} alt=""/>
    </div>
    <div className='reset-right'>
      <span className='reset-back-icon'onClick={ handleReset}><IoArrowBack className='reicon'/><span className='reset-text'>Back</span></span>
      <div className='reset-text-div'>
        <h3>Reset password</h3>
        <span>Enter your email address and we'll send you a link to reset your password.</span>
        </div>
        <div className='reset-first-inp'>
          <label htmlFor="">Email</label>
            <input type="email" placeholder='email'/>
        </div>
        {/* <div className='reset-second-inp'>
            <input type="password" placeholder='password' />
            <span className='eye-icon'>
            <RemoveRedEyeIcon/>
            </span>
        </div> */}
        
        <button className='reset-login'>Reset password</button>
    </div>
</div>
  )
}

export default ResetPasswordPage