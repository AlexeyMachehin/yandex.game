import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // import the reducer function from the counter slice and add it
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
