import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SubmittedDataTable = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const submittedData = location.state?.submittedData || [];

  const handleBack = () => {
    navigate("/"); 
  };

  return (
    <div className="bg-slate-800 p-8 rounded-md shadow-lg">
      <h2 className="text-xl text-white mb-4 text-center">Submitted Data</h2>
      <table className="min-w-full text-white text-center">
        <thead>
          <tr>
            <th className="p-3 border">First Name</th>
            <th className="p-3 border">Last Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Password</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td className="p-3 border">{data.firstName}</td>
              <td className="p-3 border">{data.lastName}</td>
              <td className="p-3 border">{data.email}</td>
              <td className="p-3 border">{data.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 text-center">
        <button
          onClick={handleBack}
          className="text-[18px] rounded-full py-2 px-4 transition-colors duration-300 bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white"
        >
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default SubmittedDataTable;