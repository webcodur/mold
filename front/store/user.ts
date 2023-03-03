import { createSlice } from "@reduxjs/toolkit";

interface userType {
  user: initialStateType
}
interface initialStateType {
  name: string
  age: number
  email: string
}

export const userSlice = createSlice({
  name: "user",
  initialState: { name: "ASDF", age: 0, email: "" } as initialStateType,
  reducers: {
    login: (state, action) => {
      state = action.payload.user;
    },
  },
});

export default userSlice.reducer;
