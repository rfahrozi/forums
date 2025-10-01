import React from 'react';
import './LoadingIndicator.css';

export default function LoadingIndicator() {
  return (
    <div className="skeleton-loader" data-testid="skeleton-loader">
      <div className="skeleton-item" />
      <div className="skeleton-item" />
      <div className="skeleton-item" />
    </div>
  );
}
