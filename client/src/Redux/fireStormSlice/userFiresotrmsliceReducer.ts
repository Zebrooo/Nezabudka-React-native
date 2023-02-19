import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  email: '',
  token: '',
  id: '',
};

const userFirestormSlice = createSlice({
  name: "userFirestorm",
  initialState,
  reducers: {
    setUserFirestorm(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUserFirestorm(state) {
      state.email = '';
      state.token = '';
      state.id = '';
    },
  },
});

export const { setUserFirestorm, removeUserFirestorm } =
  userFirestormSlice.actions;
export default userFirestormSlice.reducer;

export function useAuth() {
  const { email, token, id } = useSelector((state) => state.userFirestorm);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
