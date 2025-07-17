import React from 'react';
import '../index.css';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/loading_vid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="loader mb-6"></div>
        <span className="text-3xl font-bold text-white drop-shadow-lg animate-pulse">Loading...</span>
      </div>
      <style>{`
        .loader {
          border: 6px solid #f3f3f3;
          border-top: 6px solid #3498db;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
