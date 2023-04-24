import React, { useState } from "react";

interface Props {
  label: string;
}

export const Input: React.FC<Props> = ({ label }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={`input-${label}`}>{label}</label>
      <input
        id={`input-${label}`}
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
