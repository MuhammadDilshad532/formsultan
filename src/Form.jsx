import React, { useState } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import "./app.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      isValid = false;
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email (e.g. abc@gmail.com)";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage("Your data is saved!");
      setSubmittedData([...submittedData, formData]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Form</h1>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="relative my-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
              Your First Name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative my-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
              Your Last Name
            </label>
          </div>

          {/* Email */}
          <div className="relative my-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
              Your Email
            </label>
            <AiOutlineMail className="absolute top-4 right-4" />
            {errors.email && (
              <span className="text-red-700">{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="relative my-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
              Your Password
            </label>
            <AiOutlineLock className="absolute top-4 right-4" />
          </div>

          {/* Confirm Password */}
          <div className="relative my-4">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
            />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
              Confirm Your Password
            </label>
            <AiOutlineLock className="absolute top-4 right-4" />
            {errors.password && (
              <span className="text-red-700">{errors.password}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded-full py-2 transition-colors duration-300 bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white"
          >
            Save
          </button>

          {/* Success Message */}
          {successMessage && (
            <span className="text-green-600 text-center block mt-4">
              {successMessage}
            </span>
          )}
        </form>
      </div>
      <div className="bg-slate-800 ml-10 ">
        {submittedData.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl text-white mb-4 text-center ">
              Submitted Data
            </h2>
            <table className="min-w-full text-white text-center ">
              <thead className=" text-white">
                <tr>
                  <th className=" p-1 border">First Name</th>
                  <th className=" p-4 border">Last Name</th>
                  <th className=" border">Email</th>
                  <th className="p-3 border">Password</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td className=" p-3 border">{data.firstName}</td>
                    <td className=" p-3 border">{data.lastName}</td>
                    <td className=" p-3 border">{data.email}</td>
                    <td className="p-3 border">{data.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
