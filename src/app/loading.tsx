import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* You can replace this with a more complex loader component */}
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-600"></div>
    </div>
  );
}