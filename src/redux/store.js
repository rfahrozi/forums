// Konfigurasi Redux Store, menghubungkan semua slice fitur utama aplikasi
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import threadReducer from './slices/threadSlice';
import commentReducer from './slices/commentSlice';
import votesReducer from './slices/votesSlice';
import leaderboardReducer from './slices/leaderboardSlice';
import categoryReducer from './slices/categorySlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    threads: threadReducer,
    comments: commentReducer,
    votes: votesReducer,
    leaderboard: leaderboardReducer,
    category: categoryReducer,
    users: usersReducer,
  },
});

export default store;
