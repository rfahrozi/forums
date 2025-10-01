import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import AuthForm from './components/AuthForm';
import ThreadList from './components/ThreadList';
import ThreadForm from './components/ThreadForm';
import Leaderboard from './components/Leaderboard';
import ThreadDetailPage from './pages/ThreadDetailPage';
import { logout, setToken, fetchMe } from './redux/slices/authSlice';

import './styles/App.css';

function Home() {
  const token = useSelector((state) => state.auth.token);
  return (
    <div>
      <h1>Selamat Datang di Forum Dicoding! 😊</h1>
      {token && <ThreadForm />}
      <ThreadList />
    </div>
  );
}

function RegisterPage() {
  return <AuthForm mode="register" />;
}

function LoginPage() {
  return <AuthForm mode="login" />;
}

export default function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      dispatch(setToken(storedToken));
      dispatch(fetchMe());
    }
  }, [dispatch]);

  return (
    <Router>
      <nav>
        <Link to="/">Beranda</Link>
        {' | '}
        <Link to="/leaderboard">Papan Peringkat</Link>
        {!token ? (
          <>
            {' | '}
            <Link to="/login">Masuk</Link>
            {' | '}
            <Link to="/register">Daftar</Link>
          </>
        ) : (
          <>
            {' | '}
            <button type="button" onClick={() => dispatch(logout())}>Keluar</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route
          path="/login"
          element={!token ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!token ? <RegisterPage /> : <Navigate to="/" />}
        />
        <Route path="/threads/:threadId" element={<ThreadDetailPage />} />
      </Routes>
    </Router>
  );
}
