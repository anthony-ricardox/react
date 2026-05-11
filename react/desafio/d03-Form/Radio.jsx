import React from "react";
import "./App.module.css";
const Radio = ({ pergunta, options, value, id, onChange, active }) => {

  if(active === false) return null
  return (
    <fieldset>
      <legend > {pergunta}</legend>
      {options.map((option) => (
        <p key={option}>
          <label >
            <input
              type="radio"
              id={id}
              checked={value === option}
              value={option}
              onChange={onChange}
            />
          </label>
          {option}
        </p>
      ))}
    </fieldset>
  );
};

export default Radio;
