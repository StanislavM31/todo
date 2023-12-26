import React from "react";

export const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <div>
      <input type="text" onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>+Add</button>
    </div>
  );
};
