import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUser } from '../api/loginApi';

export const loginUser = createAsyncThunk('auth/loginUser', async () => {
  const user = await fetchUser();
  return {
    token: user.login.uuid,
    user,
  };
});