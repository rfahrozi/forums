import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../redux/slices/commentSlice';

// Komponen form komentar pada thread
function CommentForm({ threadId }) {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  function handleSubmit(e) {
    e.preventDefault();
    if (!token) {
      console.warn('Login dulu dong buat komentar! 😄');
      return;
    }
    dispatch(postComment({ threadId, content }));
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: '16px 0' }}>
      <textarea
        placeholder="Tulis komentar kamu di sini... 😊"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: 300, height: 60 }}
      />
      <button type="submit">Kirim Komentar</button>
    </form>
  );
}

CommentForm.propTypes = { threadId: PropTypes.string.isRequired };

export default CommentForm;
