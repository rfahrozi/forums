import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { upvoteComment, downvoteComment } from '../redux/slices/votesSlice';

function CommentVoteButton({ threadId, commentId }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.user?.id);
  const voteStatus = useSelector((state) => state.votes.commentVotes[commentId]);

  function handleUpvote() {
    if (!token || !userId) {
      console.warn('Harap login dahulu untuk upvote!');
      return;
    }
    dispatch(upvoteComment({ threadId, commentId, token }));
  }

  function handleDownvote() {
    if (!token || !userId) {
      console.warn('Harap login dahulu untuk downvote!');
      return;
    }
    dispatch(downvoteComment({ threadId, commentId, token }));
  }

  return (
    <div>
      <button
        type="button"
        style={{ color: voteStatus === 'up' ? 'red' : 'grey', marginRight: 6 }}
        onClick={handleUpvote}
      >
        ↑
      </button>
      <button
        type="button"
        style={{ color: voteStatus === 'down' ? 'blue' : 'grey' }}
        onClick={handleDownvote}
      >
        ↓
      </button>
    </div>
  );
}

CommentVoteButton.propTypes = {
  threadId: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
};

export default CommentVoteButton;
