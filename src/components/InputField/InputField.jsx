import React from "react";

const InputField = ({ label, type, name, value, onChange, error, icon }) => {
  return (
    <div className="relative my-4">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
      />
      <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
        {label}
      </label>
      {icon && <span className="absolute top-4 right-4">{icon}</span>}
      {error && <span className="text-red-700">{error}</span>}
    </div>
  );
};

export default InputField;
