import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { voteThreadUp, voteThreadDown, voteCommentUp, voteCommentDown } from '../../api/forumApi';
import { fetchThreadDetail, fetchThreads } from './threadSlice';

// AsyncThunk untuk voting thread
export const upvoteThread = createAsyncThunk(
  'votes/up',
  async ({ threadId, token }, thunkAPI) => {
    const result = await voteThreadUp(threadId, token);
    thunkAPI.dispatch(fetchThreads());
    return result;
  },
);

export const downvoteThread = createAsyncThunk(
  'votes/down',
  async ({ threadId, token }, thunkAPI) => {
    const result = await voteThreadDown(threadId, token);
    thunkAPI.dispatch(fetchThreads());
    return result;
  },
);

// AsyncThunk untuk voting komentar
export const upvoteComment = createAsyncThunk(
  'votes/upComment',
  async ({ threadId, commentId, token }, thunkAPI) => {
    const result = await voteCommentUp(threadId, commentId, token);
    thunkAPI.dispatch(fetchThreadDetail(threadId));
    return result;
  },
);

export const downvoteComment = createAsyncThunk(
  'votes/downComment',
  async ({ threadId, commentId, token }, thunkAPI) => {
    const result = await voteCommentDown(threadId, commentId, token);
    thunkAPI.dispatch(fetchThreadDetail(threadId));
    return result;
  },
);

const votesSlice = createSlice({
  name: 'votes',
  initialState: {
    threadVotes: {},
    commentVotes: {},
  }, // { [threadId]: 'up'|'down'|undefined, [commentId]: 'up'|'down'|undefined }
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(upvoteThread.fulfilled, (state, action) => {
        const { threadId } = action.meta.arg;
        state.threadVotes[threadId] = 'up';
      })
      .addCase(downvoteThread.fulfilled, (state, action) => {
        const { threadId } = action.meta.arg;
        state.threadVotes[threadId] = 'down';
      })
      .addCase(upvoteComment.fulfilled, (state, action) => {
        const { commentId } = action.meta.arg;
        state.commentVotes[commentId] = 'up';
      })
      .addCase(downvoteComment.fulfilled, (state, action) => {
        const { commentId } = action.meta.arg;
        state.commentVotes[commentId] = 'down';
      });
  },
});

export default votesSlice.reducer;
