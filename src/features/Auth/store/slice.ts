import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '@/features/Auth/store/thunks';
import { User } from '@/features/Auth/types/user';



interface AuthState {
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('user', JSON.stringify(action.payload));
    });
  },
});

export default authSlice.reducer;
