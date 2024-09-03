// src/components/Loading.jsx
import React from 'react';
import '/src/index.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-bar">
        <div className="progress"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;


