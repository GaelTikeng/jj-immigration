import React from "react";

type Props = {
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export default function InputCheckBox({value, label, onChange}: Props) {
  return (
    <div className="flex gap-2">
      <input type="checkbox" name="Programme intereser" value={value} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
}
