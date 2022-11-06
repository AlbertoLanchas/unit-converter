import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types";

export const addAction = (data) => ({ type: ADD_TO_FAVORITES, payload: data });

export const removeAction = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
});

export const noAction = (data) => ({
  type: NO_DATA,
});
