import React from "react";
import "../../scss/Saved.scss";
import { useAppContext } from "../../appContext";

const Saved = () => {
  const { favorites, removeFromFavorites } = useAppContext();

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
