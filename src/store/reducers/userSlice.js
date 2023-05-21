import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  email: "",
};

const userReducer = createSlice({
  name: "majiydiy",
  initialState,

  reducers: {
    setUserData: (state, action) => {
      const { username, password, email } = action.payload;
      state.username = username;
      state.password = password;
      state.email = email;
    },
  },
});

export const { setUserData } = userReducer.actions;
export default userReducer.reducer;
