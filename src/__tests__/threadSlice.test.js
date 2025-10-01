import threadReducer, { updateVote, fetchThreads, postThread, fetchThreadDetail } from '../redux/slices/threadSlice';

const initialState = { list: [], detail: null, status: 'idle', error: null };

describe('threadSlice reducer', () => {
  it('should return the initial state', () => {
    expect(threadReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('handles updateVote up', () => {
    const state = {
      ...initialState,
      list: [{ id: 1, upVotesBy: [], downVotesBy: [], totalVotes: 0 }],
    };
    const actual = threadReducer(state, updateVote({ threadId: 1, voteType: 'up', userId: 1 }));
    expect(actual.list[0].upVotesBy).toContain(1);
    expect(actual.list[0].downVotesBy).not.toContain(1);
    expect(actual.list[0].totalVotes).toBe(1);
  });

  it('handles updateVote down', () => {
    const state = {
      ...initialState,
      list: [{ id: 1, upVotesBy: [], downVotesBy: [], totalVotes: 0 }],
    };
    const actual = threadReducer(state, updateVote({ threadId: 1, voteType: 'down', userId: 1 }));
    expect(actual.list[0].downVotesBy).toContain(1);
    expect(actual.list[0].upVotesBy).not.toContain(1);
    expect(actual.list[0].totalVotes).toBe(-1);
  });

  it('should handle fetchThreads.pending', () => {
    const action = { type: fetchThreads.pending.type };
    const actual = threadReducer(initialState, action);
    expect(actual.status).toEqual('loading');
    expect(actual.error).toBeNull();
  });

  it('should handle fetchThreads.fulfilled', () => {
    const threads = [{ id: 1, title: 'Test', ownerName: 'User', totalComments: 0, category: 'General' }];
    const action = { type: fetchThreads.fulfilled.type, payload: threads };
    const actual = threadReducer({ ...initialState, status: 'loading' }, action);
    expect(actual.status).toEqual('succeeded');
    expect(actual.list).toEqual(threads);
    expect(actual.error).toBeNull();
  });

  it('should handle fetchThreads.rejected', () => {
    const action = { type: fetchThreads.rejected.type, error: { message: 'Error' } };
    const actual = threadReducer({ ...initialState, status: 'loading' }, action);
    expect(actual.status).toEqual('failed');
    expect(actual.error).toEqual('Error');
  });

  it('should handle postThread.pending', () => {
    const action = { type: postThread.pending.type };
    const actual = threadReducer(initialState, action);
    expect(actual.status).toEqual('loading');
    expect(actual.error).toBeNull();
  });

  it('should handle postThread.fulfilled', () => {
    const newThread = { id: 2, title: 'New Thread' };
    const action = { type: postThread.fulfilled.type, payload: newThread };
    const state = { ...initialState, list: [{ id: 1 }], status: 'loading' };
    const actual = threadReducer(state, action);
    expect(actual.status).toEqual('succeeded');
    expect(actual.list[0]).toEqual(newThread);
    expect(actual.error).toBeNull();
  });

  it('should handle postThread.rejected', () => {
    const action = { type: postThread.rejected.type, error: { message: 'Error' } };
    const actual = threadReducer({ ...initialState, status: 'loading' }, action);
    expect(actual.status).toEqual('failed');
    expect(actual.error).toEqual('Error');
  });

  it('should handle fetchThreadDetail.fulfilled', () => {
    const detail = { id: 1, title: 'Detail' };
    const action = { type: fetchThreadDetail.fulfilled.type, payload: detail };
    const actual = threadReducer(initialState, action);
    expect(actual.detail).toEqual(detail);
  });
});
