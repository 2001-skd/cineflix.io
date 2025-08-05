import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "userdetails",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export default UserSlice.reducer;
export const { addUser, removeUser } = UserSlice.actions;
