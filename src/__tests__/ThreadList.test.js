import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import ThreadList from '../components/ThreadList';

jest.mock('react-redux', () => {
  const actual = jest.requireActual('react-redux');
  return {
    ...actual,
    useDispatch: () => jest.fn(),
  };
});

const mockStore = configureStore([]);

describe('ThreadList', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      threads: {
        list: [
          {
            id: 1,
            title: 'Test Thread',
            body: 'This is a test thread body',
            ownerName: 'Test User',
            createdAt: '2023-01-01T00:00:00.000Z',
            totalComments: 2,
            category: 'General',
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
        status: 'succeeded',
      },
      category: { selected: 'Semua' },
      auth: { token: null, user: null },
      votes: { threadVotes: {} },
    });
    store.dispatch = jest.fn();
  });

  it('renders thread list correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThreadList />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(/Daftar Thread/)).toBeInTheDocument();
    expect(screen.getByText('Test Thread')).toBeInTheDocument();
    expect(screen.getByText('This is a test thread body...')).toBeInTheDocument();
    expect(screen.getByText(/Test User/)).toBeInTheDocument();
    expect(screen.getByText(/2 komentar/i)).toBeInTheDocument();
  });

  it('filters threads by category', () => {
    store = mockStore({
      threads: {
        list: [
          { id: 1, title: 'General Thread', body: 'General body', category: 'General', upVotesBy: [], downVotesBy: [] },
          { id: 2, title: 'Tech Thread', body: 'Tech body', category: 'Tech', upVotesBy: [], downVotesBy: [] },
        ],
        status: 'succeeded',
      },
      category: { selected: 'Tech' },
      auth: { token: null, user: null },
      votes: { threadVotes: {} },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThreadList />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Tech Thread')).toBeInTheDocument();
    expect(screen.queryByText('General Thread')).not.toBeInTheDocument();
  });

  it('shows loading indicator when loading', () => {
    store = mockStore({
      threads: { list: [], status: 'loading' },
      category: { selected: 'Semua' },
      auth: { token: null, user: null },
      votes: { threadVotes: {} },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThreadList />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
  });

  it('shows no threads message when filtered list is empty', () => {
    store = mockStore({
      threads: { list: [], status: 'succeeded' },
      category: { selected: 'Semua' },
      auth: { token: null, user: null },
      votes: { threadVotes: {} },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThreadList />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Wah, belum ada thread di sini. Yuk buat pertama! 🚀')).toBeInTheDocument();
  });
});
