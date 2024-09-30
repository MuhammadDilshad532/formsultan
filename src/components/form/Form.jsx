import React, { useState } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import SubmittedDataTable from "../SubmittedDataTable/SubmittedDataTable";
import InputField from "../InputField/InputField"; 

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
const Fields = [
  {label:"Your First Name" , type:"text" , name:"firstname"},
  {label:"Your Last Name" , type:"text" , name:"lastname"},
  {label:"Your Email" , type:"email" , name:"email", icon:<AiOutlineMail /> , error:errors.email },
  {label:"Your Password" , type:"password" , name:"password" , icon:<AiOutlineLock />},
  {label:"Confirm Your password" , type:"password" , name:"confirmPassword" , error:errors.password},
]
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Form</h1>
        <form onSubmit={handleSubmit}>
         {
          Fields.map((field , index) =>{
            <InputField 
            key={index}
            label={field.label}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            error={field.error}
            icon={field.icon}
            />
          })}
          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded-full py-2 transition-colors duration-300 bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white"
          >
            Save
          </button>
          {successMessage && (
            <span className="text-green-600 text-center block mt-4">
              {successMessage}
            </span>
          )}
        </form>
      </div>
      <div className="bg-slate-800 ml-10">
        {submittedData.length > 0 && (
          <SubmittedDataTable submittedData={submittedData} />
        )}
      </div>
    </>
  );
};

export default Form;
