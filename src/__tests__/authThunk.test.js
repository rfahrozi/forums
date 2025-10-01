import { loginUser } from '../redux/slices/authSlice';
import { loginApi } from '../api/forumApi';

jest.mock('../api/forumApi');

describe('loginUser thunk', () => {
  it('should dispatch fulfilled on successful login', async () => {
    const mockResponse = { token: 'mock-token' };
    loginApi.mockResolvedValue(mockResponse);

    const dispatch = jest.fn();
    const getState = () => ({});

    const thunk = loginUser({ email: 'fahrozi@gmail.com', password: 'rafa1234' });
    await thunk(dispatch, getState, undefined);

    expect(loginApi).toHaveBeenCalledWith({ email: 'fahrozi@gmail.com', password: 'rafa1234' }, expect.any(Object));
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: loginUser.fulfilled.type,
        payload: mockResponse,
      }),
    );
  });

  it('should dispatch rejected on login failure', async () => {
    const mockError = new Error('Login failed');
    loginApi.mockRejectedValue(mockError);

    const dispatch = jest.fn();
    const getState = () => ({});

    const thunk = loginUser({ email: 'fahrozi@gmail.com', password: 'rafa1234' });
    await thunk(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: loginUser.rejected.type,
        error: expect.objectContaining({ message: 'Login failed' }),
      }),
    );
  });
});
