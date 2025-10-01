import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchThreads } from '../redux/slices/threadSlice';
import VoteButton from './VoteButton';
import CategoryFilter from './CategoryFilter';
import LoadingIndicator from './LoadingIndicator';

export default function ThreadList() {
  const dispatch = useDispatch();
  const threads = useSelector((state) => state.threads.list);
  const status = useSelector((state) => state.threads.status);
  const selectedCategory = useSelector((state) => state.category.selected);

  useEffect(() => {
    dispatch(fetchThreads());
  }, [dispatch]);

  // Filtering kategori (asumsi kategori = property di thread, contoh: thread.category)
  const filtered = selectedCategory === 'Semua'
    ? threads
    : threads.filter((t) => t.category.toLowerCase() === selectedCategory.toLowerCase());

  if (status === 'loading') return <LoadingIndicator />;

  return (
    <div>
      <CategoryFilter />
      <h2>Daftar Thread 📝</h2>
      {filtered.length === 0 ? <p>Wah, belum ada thread di sini. Yuk buat pertama! 🚀</p> : null}
      {filtered.map((thread) => (
        <Link
          key={thread.id}
          to={`/threads/${thread.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            style={{ border: '1px solid #ccc', margin: 8, padding: 8, cursor: 'pointer' }}
          >
            <h4>{thread.title}</h4>
            <p>
              {thread.body.slice(0, 60)}
              ...
            </p>
            <div>
              Dibuat oleh:
              {thread.ownerName}
              {' | '}
              {new Date(thread.createdAt).toLocaleString()}
              {' | '}
              {thread.totalComments}
              {' komentar 💬'}
            </div>
            <div>
              {'👍 '}
              {thread.upVotesBy.length - thread.downVotesBy.length}
              {' suara'}
            </div>
            <VoteButton threadId={thread.id} />
          </div>
        </Link>
      ))}
    </div>
  );
}
