import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-[color:var(--primary-bg)]">
      <h1 className="text-6xl font-bold mb-4 animate-pulse ">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <Link to="/" className="text-blue-500 hover:underline text-lg">
        Go back to Home
      </Link>
    </div>
  );
};

