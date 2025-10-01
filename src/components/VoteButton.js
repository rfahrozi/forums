import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { upvoteThread, downvoteThread } from '../redux/slices/votesSlice';
import { updateVote } from '../redux/slices/threadSlice';

// Komponen tombol vote thread
function VoteButton({ threadId }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.user?.id);
  const voteStatus = useSelector((state) => state.votes.threadVotes[threadId]);
  const thread = useSelector((state) => state.threads.list.find((t) => t.id === threadId));
  const totalVotes = thread ? thread.totalVotes : 0;

  function handleUpvote() {
    if (!token || !userId) {
      console.warn('Harap login dahulu untuk upvote!');
      return;
    }
    dispatch(updateVote({ threadId, voteType: 'up', userId }));
    dispatch(upvoteThread({ threadId, token }));
  }
  function handleDownvote() {
    if (!token || !userId) {
      console.warn('Harap login dahulu untuk downvote!');
      return;
    }
    dispatch(updateVote({ threadId, voteType: 'down', userId }));
    dispatch(downvoteThread({ threadId, token }));
  }

  return (
    <div>
      <button
        type="button"
        style={{ color: voteStatus === 'up' ? 'red' : 'grey', marginRight: 6 }}
        onClick={handleUpvote}
      >
        ↑ Upvote
      </button>
      <button
        type="button"
        style={{ color: voteStatus === 'down' ? 'blue' : 'grey' }}
        onClick={handleDownvote}
      >
        ↓ Downvote
      </button>
      <span>
        (
        {totalVotes}
        )
      </span>
      {/* Komentar: Tombol warna sesuai status vote, human-friendly UX */}
    </div>
  );
}

VoteButton.propTypes = { threadId: PropTypes.string.isRequired };

export default VoteButton;
