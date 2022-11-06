import React, { useEffect } from "react";
import "../../scss/Saved.scss";
import { useAppContext } from "../../appContext";

const Saved = () => {
  const { favorites, removeFromFavorites } = useAppContext();

  const getSavedFetch = () => {
    fetch("http://localhost:4000/api/saved")
      .then((res) => res.json())
      .then((allSaveds) => console.log("este es el saveds", allSaveds));
  };

  useEffect(() => {
    getSavedFetch();
  }, []);
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
