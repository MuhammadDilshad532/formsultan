import React from "react";

const SubmittedDataTable = ({ submittedData }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl text-white mb-4 text-center">
        Submitted Data
      </h2>
      <table className="min-w-full text-white text-center">
        <thead className="text-white">
          <tr>
            <th className="p-1 border">First Name</th>
            <th className="p-4 border">Last Name</th>
            <th className="border">Email</th>
            <th className="p-3 border">Password</th>
          </tr>
        </thead>
        <tbody className="text-white">
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
    </div>
  );
};

export default SubmittedDataTable;
