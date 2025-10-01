import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerApi, loginApi, getMe } from '../../api/forumApi';

// Async thunk untuk register dan login
export const registerUser = createAsyncThunk('auth/register', registerApi);
export const loginUser = createAsyncThunk('auth/login', loginApi);
export const fetchMe = createAsyncThunk('auth/me', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  return getMe(token);
});

const initialState = { user: null, token: null, status: 'idle', error: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('accessToken');
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Registration failed';
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.status = 'succeeded';
        state.error = null;
        localStorage.setItem('accessToken', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Login failed';
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});
export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
