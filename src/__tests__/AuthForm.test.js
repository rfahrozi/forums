import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import AuthForm from '../components/AuthForm';

const mockStore = configureStore([]);

describe('AuthForm', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { status: 'idle', error: null },
    });
    store.dispatch = jest.fn();
  });

  it('renders login form correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthForm mode="login" />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByRole('heading', { name: /Masuk/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Alamat Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Kata Sandi')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Nama')).not.toBeInTheDocument();
  });

  it('renders register form correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthForm mode="register" />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Yuk Daftar Akun Baru! 🎉')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nama Lengkap')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Alamat Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Kata Sandi')).toBeInTheDocument();
  });

  it('submits login form', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthForm mode="login" />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.change(screen.getByPlaceholderText('Alamat Email'), { target: { value: 'fahrozi@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Kata Sandi'), { target: { value: 'rafa1234' } });
    fireEvent.click(screen.getByRole('button', { name: /Masuk/i }));

    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  it('submits register form', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthForm mode="register" />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.change(screen.getByPlaceholderText('Nama Lengkap'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText('Alamat Email'), { target: { value: 'fahrozi@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Kata Sandi'), { target: { value: 'rafa1234' } });
    fireEvent.click(screen.getByText('Daftar Sekarang'));

    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  it('displays error message', () => {
    store = mockStore({
      auth: { status: 'idle', error: 'Login failed' },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthForm mode="login" />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Login failed')).toBeInTheDocument();
  });
});
