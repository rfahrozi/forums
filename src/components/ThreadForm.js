import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postThread } from '../redux/slices/threadSlice';

// Komponen form untuk membuat thread baru
export default function ThreadForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { status, error } = useSelector((state) => state.threads);

  function handleSubmit(e) {
    e.preventDefault();
    if (!token) {
      console.warn('Hei, login dulu ya biar bisa bikin thread! 😉');
      return;
    }
    dispatch(postThread({ title, body }));
    setTitle('');
    setBody('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: '16px 0' }}>
      <h3>Yuk Buat Thread Baru! 🚀</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        placeholder="Judul Thread"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block' }}
      />
      <textarea
        placeholder="Ceritakan isi threadmu"
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ display: 'block', height: 70 }}
      />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sedang posting...' : 'Posting Sekarang'}
      </button>
    </form>
  );
}
