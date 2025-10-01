import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThreadDetail } from '../redux/slices/threadSlice';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import VoteButton from '../components/VoteButton';
import LoadingIndicator from '../components/LoadingIndicator';

export default function ThreadDetailPage() {
  const { threadId } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.threads.detail);

  useEffect(() => {
    dispatch(fetchThreadDetail(threadId));
  }, [dispatch, threadId]);
  if (!detail) return <LoadingIndicator />;

  return (
    <div style={{ margin: 20 }}>
      <h2>{detail.title}</h2>
      <div>
        <img src={detail.owner.avatar} alt="Avatar" style={{ width: 50, height: 50, borderRadius: '50%' }} />
        {' '}
        Dibuat oleh:
        {' '}
        {detail.owner.name}
        {' '}
        —
        {' '}
        {new Date(detail.createdAt).toLocaleString()}
      </div>
      <p>{detail.body}</p>
      <div>
        {'👍 '}
        {detail.upVotesBy.length - detail.downVotesBy.length}
        {' suara'}
      </div>
      <VoteButton threadId={detail.id} />
      <CommentForm threadId={detail.id} />
      <CommentList comments={detail.comments} threadId={detail.id} />
    </div>
  );
}
