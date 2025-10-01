import React from 'react';
import PropTypes from 'prop-types';
import CommentVoteButton from './CommentVoteButton';

// List komentar pada thread, props: comments: array komentar thread
function CommentList({ comments, threadId }) {
  if (!comments || !comments.length) return <p>Belum ada komentar.</p>;
  return (
    <div>
      <h4>Komentar</h4>
      <ul>
        {comments.map((c) => (
          <li
            key={c.id}
            style={{
              borderBottom: '1px solid #eee',
              margin: '6px 0',
              padding: '4px 0',
            }}
          >
            <b>{c.owner.name}</b>
            :
            {c.content}
            <div style={{ fontSize: 10 }}>
              Dikirim:
              {' '}
              {new Date(c.createdAt).toLocaleString()}
            </div>
            <div>
              Vote:
              {' '}
              {c.upVotesBy.length - c.downVotesBy.length}
              <CommentVoteButton threadId={threadId} commentId={c.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  })),
  threadId: PropTypes.string.isRequired,
};

CommentList.defaultProps = { comments: [] };

export default CommentList;
