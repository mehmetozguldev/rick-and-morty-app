import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouritesState {
  ids: number[];
  showAlert: boolean;
  alertContent: string;
}

const initialState: FavouritesState = {
  ids: [],
  showAlert: false,
  alertContent: "",
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {
      const index = state.ids.indexOf(action.payload);
      if (index >= 0) {
        state.ids.splice(index, 1);
        state.alertContent = "Removed from favourites";
      } else {
        state.ids.push(action.payload);
        state.alertContent = "Added to favourites";
      }
      state.showAlert = true;
    },
    hideAlert: (state) => {
      state.showAlert = false;
    },
  },
});

export const { toggleFavourite, hideAlert } = favouritesSlice.actions;
export default favouritesSlice.reducer;
