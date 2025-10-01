import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addComment } from '../../api/forumApi';

export const postComment = createAsyncThunk(
  'comments/post',
  async ({ threadId, content }, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    return addComment(threadId, content, token);
  },
);

const commentSlice = createSlice({
  name: 'comments',
  initialState: { comments: [], status: 'idle', error: null },
  extraReducers: (builder) => {
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });
  },
});
export default commentSlice.reducer;
