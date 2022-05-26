import React from "react";

const Input = ({ name, label, onChange, half=false }) => {
  return (
    <div className={`${half ? 'w-[48%]' : 'w-full'} flex flex-col mt-6`}>
      <label htmlFor={name} className="text-sm font-semibold mb-1 text-gray-700">
        {label}
      </label>
      <input
        type={`${name === "password"? "password" : "text"}`}
        name={name}
        onchange={onChange}
        className=' w-full border rounded-lg p-3 border-gray-200 hover:border-gray-400 outline-none'
      />
    </div>
  );
};

export default Input;
