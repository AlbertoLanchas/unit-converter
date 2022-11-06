import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types";

export const initialState = {};
export function savedReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      {
        // setFavorites([
        //   ...favorites,
        //   { id: new Date(), quantity, select, result, resultUnits },
        // ]);
      }
      return state;
    case REMOVE_FROM_FAVORITES:
      {
        // const oldFavorites = [...favorites];
        // const newFavorites = oldFavorites.filter(
        //   (convert) => convert.id !== id
        // );
        // setFavorites(newFavorites);
      }
      return state;
    default:
      return initialState;
  }
}
