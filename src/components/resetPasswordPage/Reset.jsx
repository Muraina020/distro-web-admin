import React, { useState } from "react";
import axios from "../../api/axiosInstance";
import { useNavigate } from "react-router";


const Reset = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(formData.password, formData.confirmPassword)
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {

      // Call your API to reset the password
      const response = await axios.post("https://apps-1.lampnets.com/distro/profiles/forgotpassword", {
        email: localStorage.getItem('userEmail'),
        newPassword: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      if (response.status === 200) {
        setSuccessMessage("Password changed successfully");
        setTimeout(() => {
          setSuccessMessage(null);
          navigate('/');
        }, 2000); // Adjust the duration of the success message before navigating
      }

      setError(null);
    } catch (error) {
      // Handle error
      setError(error.response.data.message);
      setSuccessMessage(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Change Password
        </h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}
        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleResetPassword}>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
        
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
         
          <button
            type="submit"
            className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;