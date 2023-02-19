import { configureStore } from "@reduxjs/toolkit";
import eventSliceReducer from "./eventSlice/EventSlice";
import userFiresotrmsliceReducer from "./fireStormSlice/userFiresotrmsliceReducer";
import ShopSlice from "./ShopSlice/ShopSlice";
import UserSliceReducer from "./UserSlice/UserSliceReducer";

const store = configureStore({
  reducer: {
    user: UserSliceReducer,
    userFirestorm: userFiresotrmsliceReducer,
    events: eventSliceReducer,
    shops: ShopSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
