import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("App context must be within appContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [select, setSelect] = useState("");
  const [result, setResult] = useState(0);
  const [resultUnits, setResultUnits] = useState("");

  const addToFavorites = (quantity, select, result, resultUnits) => {
    setFavorites([
      ...favorites,
      { id: new Date(), quantity, select, result, resultUnits },
    ]);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((convert) => convert.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
