import {Restaurant} from "../model/restaurant";
import {Action} from "@ngrx/store";

export const RestaurantsStore = (state: Restaurant[] = [], action: Action) => {
  switch (action.type) {
    case "SET_RESTAURANTS":
      return action.payload;
    default:
      return state;
  }
};
