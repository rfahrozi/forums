// Semua fungsi pemanggilan API Forum Dicoding ditempatkan di sini

const BASE_URL = 'https://forum-api.dicoding.dev/v1';

// Registrasi akun baru
export async function registerApi({ name, email, password }) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.user;
}

// Login user, return token
export async function loginApi({ email, password }) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return { token: data.data.token };
}

// Ambil list thread
export async function getThreads() {
  const res = await fetch(`${BASE_URL}/threads`);
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.threads;
}

// Buat thread baru
export async function createThread({ title, body }, token) {
  const res = await fetch(`${BASE_URL}/threads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, body }),
  });
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.thread;
}

// Ambil detail thread + komentar
export async function getThreadDetail(threadId) {
  const res = await fetch(`${BASE_URL}/threads/${threadId}`);
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.detailThread;
}

// Buat komentar pada thread
export async function addComment(threadId, content, token) {
  const res = await fetch(`${BASE_URL}/threads/${threadId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.comment;
}

// Upvote thread
export async function voteThreadUp(threadId, token) {
  const res = await fetch(`${BASE_URL}/threads/${threadId}/up-vote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.vote;
}

// Downvote thread
export async function voteThreadDown(threadId, token) {
  const res = await fetch(`${BASE_URL}/threads/${threadId}/down-vote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.vote;
}

// Ambil leaderboard user
export async function getLeaderboard() {
  const res = await fetch(`${BASE_URL}/leaderboards`);
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.leaderboards;
}

// Ambil daftar user
export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.users;
}

// Ambil data user saat ini
export async function getMe(token) {
  const res = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.user;
}

// Upvote komentar
export async function voteCommentUp(threadId, commentId, token) {
  const res = await fetch(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.vote;
}

// Downvote komentar
export async function voteCommentDown(threadId, commentId, token) {
  const res = await fetch(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message);
  return data.data.vote;
}
