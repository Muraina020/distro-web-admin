import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import rectangle from "../../assets/img/rectangle.png";
import "./loginPage.css"


const LoginPage = () => {
  return (
    <div className='contain'>
    <div className='left'>
        <img src={rectangle} alt=""/>
    </div>
    <div className='right'>
        <h3>Welcome back to Distro</h3>
        <span>Please sign in to your dashboard</span>
        <div className='first-inp'>
            <input type="email" placeholder='email'/>
        </div>
        <div className='second-inp'>
            <input type="password" placeholder='password' />
            <span className='eye-icon'>
            <RemoveRedEyeIcon/>
            </span>
        </div>
        <div className='remember'>
            <div className='box'>
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
         <span className='forgot'>Forgot Password?</span>
        </div>
        <button className='login'>Login</button>
    </div>
</div>
  )
}

export default LoginPage