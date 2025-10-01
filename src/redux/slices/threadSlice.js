import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getThreads, createThread, getThreadDetail, getUsers } from '../../api/forumApi';

export const fetchThreads = createAsyncThunk('threads/list', async () => {
  const threads = await getThreads();
  const users = await getUsers();
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
  return threads.map((thread) => ({
    ...thread,
    ownerName: userMap[thread.ownerId]?.name || 'Unknown',
    totalComments: thread.totalComments,
    category: thread.category,
  }));
});
export const postThread = createAsyncThunk(
  'threads/post',
  async (payload, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    return createThread(payload, token);
  },
);
export const fetchThreadDetail = createAsyncThunk(
  'threads/detail',
  getThreadDetail,
);

const threadSlice = createSlice({
  name: 'threads',
  initialState: { list: [], detail: null, status: 'idle', error: null },
  reducers: {
    updateVote(state, action) {
      const { threadId, voteType, userId } = action.payload;
      const thread = state.list.find((t) => t.id === threadId);
      if (thread) {
        if (voteType === 'up') {
          if (!thread.upVotesBy.includes(userId)) {
            thread.upVotesBy.push(userId);
            thread.downVotesBy = thread.downVotesBy.filter((id) => id !== userId);
          }
        } else if (voteType === 'down') {
          if (!thread.downVotesBy.includes(userId)) {
            thread.downVotesBy.push(userId);
            thread.upVotesBy = thread.upVotesBy.filter((id) => id !== userId);
          }
        }
        thread.totalVotes = thread.upVotesBy.length - thread.downVotesBy.length;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreads.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchThreads.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchThreads.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postThread.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(postThread.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(postThread.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchThreadDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      });
  },
});
export const { updateVote } = threadSlice.actions;
export default threadSlice.reducer;
