import React, { useState, useEffect } from "react";
import "../../scss/Saved.scss";
import { useAppContext } from "../../appContext";

const Saved = () => {
  const { favorites, removeFromFavorites } = useAppContext();
  const [arraySaved, setArraySaved] = useState([]);

  const getSavedFetch = () => {
    fetch("http://localhost:4000/api/saved")
      .then((res) => res.json())
      .then((allSaveds) => setArraySaved(allSaveds));
  };

  getSavedFetch();
  // console.log("en el fetch", arraySaved);
  console.log("hola");

  return (
    <>
      {favorites.map(({ id, quantity, select, result, resultUnits }) => {
        return (
          <>
            <div className="Saved">
              <p>{`${quantity} ${select} → ${result} ${resultUnits}`}</p>
              <button
                className="Saved-remove"
                onClick={() => removeFromFavorites(id)}
              >
                X
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Saved;
