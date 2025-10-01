import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeaderboard } from '../redux/slices/leaderboardSlice';
import LoadingIndicator from './LoadingIndicator';

export default function Leaderboard() {
  const dispatch = useDispatch();
  const { status, users, error } = useSelector((state) => state.leaderboard);

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  if (status === 'loading') return <LoadingIndicator />;
  if (error) {
    return (
      <p>
        Ups, ada error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <h2>Papan Peringkat Pengguna Aktif 🏆</h2>
      <ol>
        {users.map((u) => (
          <li key={u.user.id}>
            <img
              src={u.user.avatar}
              alt={u.user.name}
              width={24}
              style={{ verticalAlign: 'middle', marginRight: 8 }}
            />
            <b>{u.user.name}</b>
            {' '}
            — Skor:
            <b>{u.score}</b>
          </li>
        ))}
      </ol>
    </div>
  );
}
