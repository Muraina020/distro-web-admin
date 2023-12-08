import React from 'react'
import "./successPage.css"
import success from "../../assets/img/success.png";
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {

    const navigate = useNavigate();

    const handleAddDriver = () => {
      // Add logic to handle adding driver (validate fields, upload image, etc.)
      // Once the driver is successfully added, navigate to the success page
      navigate('/add');
    };
  return (
    <div className='success'>
        <div className='success-cont'>
            <img src={success} alt="" />
            <p>You've Successfully Added a Driver</p>
        </div>
        <button onClick={handleAddDriver}>
            Add Another Driver
        </button>
    </div>
  )
}

export default SuccessPage