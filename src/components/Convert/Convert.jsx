import React, { useState, useEffect } from "react";
import { useAppContext } from "../../appContext";
import "../../scss/Convert.scss";

const Convert = () => {
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    quantity,
    setQuantity,
    select,
    setSelect,
    result,
    setResult,
    resultUnits,
    setResultUnits,
  } = useAppContext();

  const conversorUnits = (select) => {
    switch (select) {
      case "":
        return;
      case "km":
        setResultUnits("miles");
        setResult(Math.round(quantity * 0.6213711922 * 100) / 100);
        return;
      case "miles":
        setResultUnits("km");
        setResult(Math.round(quantity * 1.609344 * 100) / 100);
        return;
      case "cm":
        setResultUnits("inches");
        setResult(Math.round(quantity * 0.3937007874 * 100) / 100);
        return;
      case "inches":
        setResultUnits("cm");
        setResult(Math.round(quantity * 2.54 * 100) / 100);
        return;
      case "feet":
        setResultUnits("meters");
        setResult(Math.round(quantity * 0.3048 * 100) / 100);
        return;
      case "meters":
        setResultUnits("feet");
        setResult(Math.round(quantity * 3.280839895 * 100) / 100);
        return;
      default:
        console.log("Invalid Input");
    }
  };

  // const addList = () => {
  //   setList([...list, { quantity, select, result, resultUnits }]);
  //   conversorUnits(select);
  //   // localStorage.setItem("saved", JSON.stringify(list));
  // };

  useEffect(() => {
    // setList(JSON.parse(localStorage.getItem("saved")));
    conversorUnits(select);
    console.log(favorites);
  }, [conversorUnits]);

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
        <option value="">Select an option</option>
        <option value="km">km to miles</option>
        <option value="miles">miles to km</option>
        <option value="cm">cm to inches</option>
        <option value="inches">inches to cm</option>
        <option value="feet">feet to meters</option>
        <option value="meters">meters to feet</option>
      </select>
      <button className="Convert-arrow">A</button>
      <button
        className="Convert-favourite"
        onClick={() => addToFavorites(quantity, select, result, resultUnits)}
      >
        HEART
      </button>
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
