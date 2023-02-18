import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./UserSlice/UserSliceReducer";

const store = configureStore({
  reducer: {
    user: UserSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
