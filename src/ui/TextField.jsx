import React from "react";

function TextField({ label, value, onChange, name, placeholder,dir }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label
        htmlFor={name}
        className="text-xs lg:text-sm text-secondary-500 mb-1"
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        id={name}
        name={name}
        dir={dir}
        placeholder={placeholder}
        className="textField__input"
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
