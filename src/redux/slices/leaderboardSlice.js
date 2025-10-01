import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLeaderboard } from '../../api/forumApi';

// Ambil data leaderboard
export const fetchLeaderboard = createAsyncThunk(
  'leaderboard/fetchLeaderboard',
  async () => getLeaderboard(),
);

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLeaderboard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchLeaderboard.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default leaderboardSlice.reducer;
