import { createSlice } from "@reduxjs/toolkit";
import {Movement} from "./EntityTypes";

export interface IMovements {
    data: Array<Movement>
    loading: Boolean
    error: Boolean
}
export const movementSlice = createSlice({
  name: "movements",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {
    getMovements: (state) => {
    },
    getMovementsRequest: (state) => {
      return { ...state, loading: true, error: false };
    },
    getMovementsRequestSuccess: (state, action) => {
        console.log(action)
      return { ...state, data: action.payload, loading: false, error: false };
    },
    getMovementsRequestFailure: (state) => {
      return { ...state, loading: false, error: true };
    },
  },
});

export const {getMovements, getMovementsRequest, getMovementsRequestFailure, getMovementsRequestSuccess} = movementSlice.actions;

export default movementSlice.reducer;