import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: "",
};

const slice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state: { toggle: boolean }) => {
      state.toggle = !state.toggle;
    },
    changeUser: (state, { payload }: any) => {
      state.user = payload;
    },
  },
});

export const { toggleMode, changeUser } = slice.actions;

export default slice.reducer;
