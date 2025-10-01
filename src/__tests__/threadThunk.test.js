import { fetchThreads } from '../redux/slices/threadSlice';
import { getThreads, getUsers } from '../api/forumApi';

jest.mock('../api/forumApi');

describe('fetchThreads thunk', () => {
  it('should dispatch fulfilled with mapped threads', async () => {
    const mockThreads = [
      { id: 1, ownerId: 1, title: 'Test Thread', totalComments: 0, category: 'General', upVotesBy: [], downVotesBy: [] },
    ];
    const mockUsers = [{ id: 1, name: 'Test User' }];

    getThreads.mockResolvedValue(mockThreads);
    getUsers.mockResolvedValue(mockUsers);

    const dispatch = jest.fn();
    const getState = () => ({});

    const thunk = fetchThreads();
    await thunk(dispatch, getState, undefined);

    expect(getThreads).toHaveBeenCalled();
    expect(getUsers).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: fetchThreads.fulfilled.type,
        payload: expect.arrayContaining([
          expect.objectContaining({
            id: 1,
            ownerName: 'Test User',
            totalComments: 0,
            category: 'General',
          }),
        ]),
      }),
    );
  });

  it('should dispatch rejected on failure', async () => {
    const mockError = new Error('Fetch failed');
    getThreads.mockRejectedValue(mockError);

    const dispatch = jest.fn();
    const getState = () => ({});

    const thunk = fetchThreads();
    await thunk(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: fetchThreads.rejected.type,
        error: expect.objectContaining({ message: 'Fetch failed' }),
      }),
    );
  });
});
