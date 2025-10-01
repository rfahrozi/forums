import authReducer, { setToken, logout, registerUser, loginUser, fetchMe } from '../redux/slices/authSlice';

const initialState = { user: null, token: null, status: 'idle', error: null };

describe('authSlice reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle setToken', () => {
    const actual = authReducer(initialState, setToken('test-token'));
    expect(actual.token).toEqual('test-token');
  });

  it('should handle logout', () => {
    const stateWithToken = { ...initialState, token: 'test-token', user: { id: 1 } };
    const actual = authReducer(stateWithToken, logout());
    expect(actual.token).toBeNull();
    expect(actual.user).toBeNull();
  });

  it('should handle registerUser.pending', () => {
    const action = { type: registerUser.pending.type };
    const actual = authReducer(initialState, action);
    expect(actual.status).toEqual('loading');
    expect(actual.error).toBeNull();
  });

  it('should handle registerUser.fulfilled', () => {
    const action = { type: registerUser.fulfilled.type, payload: { id: 1, name: 'User' } };
    const actual = authReducer({ ...initialState, status: 'loading' }, action);
    expect(actual.status).toEqual('succeeded');
    expect(actual.user).toEqual({ id: 1, name: 'User' });
    expect(actual.error).toBeNull();
  });

  it('should handle registerUser.rejected', () => {
    const action = { type: registerUser.rejected.type, error: { message: 'Error' } };
    const actual = authReducer({ ...initialState, status: 'loading' }, action);
    expect(actual.status).toEqual('failed');
    expect(actual.error).toEqual('Error');
  });

  it('should handle loginUser.pending', () => {
    const action = { type: loginUser.pending.type };
    const actual = authReducer(initialState, action);
    expect(actual.status).toEqual('loading');
    expect(actual.error).toBeNull();
  });

  it('should handle loginUser.fulfilled', () => {
    const action = { type: loginUser.fulfilled.type, payload: { token: 'token123' } };
    const actual = authReducer({ ...initialState, status: 'loading' }, action);
    expect(actual.status).toEqual('succeeded');
    expect(actual.token).toEqual('token123');
    expect(actual.error).toBeNull();
  });

  it('should handle loginUser.rejected', () => {
    const action = { type: loginUser.rejected.type, error: { message: 'Login failed' } };
    const actual = authReducer({ ...initialState, status: 'loading' }, action);
    expect(actual.status).toEqual('failed');
    expect(actual.error).toEqual('Login failed');
  });

  it('should handle fetchMe.fulfilled', () => {
    const action = { type: fetchMe.fulfilled.type, payload: { id: 1, name: 'User' } };
    const actual = authReducer(initialState, action);
    expect(actual.user).toEqual({ id: 1, name: 'User' });
  });
});
