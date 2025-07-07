import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/Auth/store/slice';

export const store = configureStore({
  reducer: {
    Auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;