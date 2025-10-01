import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../redux/slices/authSlice';

// Komponen form register dan login
function AuthForm({ mode }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'succeeded') {
      if (mode === 'register') {
        navigate('/login');
      } else {
        navigate('/');
      }
    }
  }, [status, mode, navigate]);

  let buttonText = 'Masuk';
  if (status === 'loading') buttonText = 'Sedang memproses...';
  else if (mode === 'register') buttonText = 'Daftar Sekarang';

  function handleSubmit(e) {
    e.preventDefault();
    if (mode === 'register') {
      dispatch(registerUser(form));
    } else {
      dispatch(loginUser(form));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{mode === 'register' ? 'Yuk Daftar Akun Baru! 🎉' : 'Masuk ke Akunmu 😊'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {mode === 'register' && (
        <input
          type="text"
          autoComplete="name"
          placeholder="Nama Lengkap"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      )}
      <input
        type="email"
        autoComplete="email"
        required
        placeholder="Alamat Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        required
        autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
        placeholder="Kata Sandi"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit" disabled={status === 'loading'}>
        {buttonText}
      </button>
    </form>
  );
}

AuthForm.propTypes = { mode: PropTypes.string };

AuthForm.defaultProps = { mode: 'login' };

export default AuthForm;
