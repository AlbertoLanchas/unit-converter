import React, { useState, useEffect } from "react";
import "../../scss/Convert.scss";

const Convert = () => {
  const [quantity, setQuantity] = useState(1);
  const [select, setSelect] = useState("km");
  const [result, setResult] = useState(1);
  const [resultUnits, setResultUnits] = useState("miles");

  const conversorUnits = (select) => {
    switch (select) {
      case "km":
        setResultUnits("miles");
        setResult(quantity * 2);
        break;
      case "miles":
        setResultUnits("km");
        setResult(quantity * 3);
      case "cm":
        setResultUnits("inches");
        setResult(quantity * 4);
        break;
      case "inches":
        setResultUnits("cm");
        setResult(quantity * 5);
        break;
      case "feet":
        setResultUnits("meters");
        setResult(quantity * 6);
        break;
      case "meters":
        setResultUnits("feet");
        setResult(quantity * 7);
        break;
      default:
        console.log("Invalid Input");
    }
  };

  useEffect(() => {
    conversorUnits(select);
    console.log(result);
  }, [result]);

  return (
    <div className="Convert">
      <h2 className="Convert-title">convert</h2>
      <select
        className="Convert-select"
        onChange={(e) => {
          conversorUnits(e.target.value);
          setSelect(e.target.value);
        }}
      >
        <option value="km">km to miles</option>
        <option value="miles">miles to km</option>
        <option value="cm">cm to inches</option>
        <option value="inches">inches to cm</option>
        <option value="feet">feet to cm</option>
        <option value="meters">meters to feet</option>
      </select>
      <button className="Convert-arrow" onClick={() => setSelect("cm")}>
        A
      </button>
      <i className="Convert-favourite">HEART</i>
      <input
        className="Convert-input"
        type="text"
        placeholder="100"
        onChange={(e) => {
          conversorUnits(select);
          setQuantity(e.target.value);
        }}
        value={quantity}
      />
      <i className="Convert-unit">{select}</i>
      <i className="Convert-value">
        {result} {resultUnits}
      </i>
    </div>
  );
};

export default Convert;
