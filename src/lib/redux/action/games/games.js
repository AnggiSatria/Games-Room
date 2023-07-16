import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
};

export const gamesSlices = createSlice({
  name: "games",
  initialState,
  reducers: {
    GAMES_ID: (state, action) => {
      // console.log(action);
      return {
        ...state,
        games_id: action.payload,
      };
    },
    FETCH_GAMES_DETAIL: (state, action) => {
      // console.log(action);
      return {
        ...state,
        games_details: action.payload,
      };
    },
    FETCH_GAMES: (state, action) => {
      // console.log(action);
      return {
        ...state,
        games: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { FETCH_GAMES, FETCH_GAMES_DETAIL, GAMES_ID } =
  gamesSlices.actions;

export const selectgames = (state) => state.games;

export default gamesSlices.reducer;
