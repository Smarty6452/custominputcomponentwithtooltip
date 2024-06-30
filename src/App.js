import React, { useState } from "react";
import Input from "./customComponent/Input";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <Input
        label="Enter Name"
        maxLength={60}
        width="400px"
        height="300px"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        showAddButton={true}
      />
    </div>
  );
}
