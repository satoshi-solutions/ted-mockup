'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong!</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again later.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-ted-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-ted-blue-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 