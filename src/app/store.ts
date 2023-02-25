import { configureStore, ThunkAction, Action, getDefaultMiddleware, applyMiddleware } from '@reduxjs/toolkit';
import { middleware } from 'yargs';
import { postsApi } from '../api/postApi';
import { AuthMiddleware } from '../middlewares/auth-middleware';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(AuthMiddleware).concat(
    postsApi.middleware
  )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
