import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-ted-blue-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block bg-ted-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-ted-blue-600 transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
} 