import React, { useState, useEffect } from "react";

import "./CustomTextInput.css";
import Tooltip from "./Tooltip";

const Input = ({ label, maxLength, width, value, onChange, showAddButton }) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    if (newValue.length <= maxLength) {
      setInputValue(newValue);
      onChange && onChange(e);
    } else {
      setInputValue(newValue.slice(0, maxLength)); // Trim the input to maxLength
    }
  };

  const isExceedLimit = inputValue.length >= maxLength;

  return (
    <div className="material-textfield" style={{ width: width || "100%" }}>
      <input
        className={`custom-input ${isExceedLimit ? "exceed-limit" : ""}`}
        placeholder=" "
        type="text"
        maxLength={maxLength}
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        className={`custom-label ${isFocused || inputValue ? "active" : ""}`}
      >
        {label}
      </label>
      {(isFocused || inputValue) && (
        <div className={`char-limit ${isExceedLimit ? "exceed-limit" : ""}`}>
          {`${inputValue.length}/${maxLength}`}
        </div>
      )}
      {showAddButton && (
        <div
          className="add-button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && <Tooltip text="Add Item" />}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 512 512"
          >
            <line
              x1="256"
              y1="112"
              x2="256"
              y2="400"
              style={{
                fill: "none",
                stroke: "#000000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
              }}
            />
            <line
              x1="400"
              y1="256"
              x2="112"
              y2="256"
              style={{
                fill: "none",
                stroke: "#000000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
              }}
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Input;
