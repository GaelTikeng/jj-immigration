import React from "react";

type Props = {
  label: string;
  inputName: string;
  type: string;
  value: string;
  onChange: (event: any) => void
};

export default function InputField({ label, value, type, inputName, onChange }: Props) {
  return (
    <>
      <label htmlFor={inputName}>{label}</label>
      <input
        className="border mt-1 mb-7 p-1 w-[95%] md:w-[500px] bg-transparent outline-none focus:border-[#25a9e3] shadow-sm rounded-md"
        name={inputName}
        value={value}
        onChange={onChange}
        type={type}
        required
        autoComplete="on"
      />
    </>
  );
}
