export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-8 bg-gray-200 rounded w-1/3 mb-8 animate-pulse"></div>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="h-10 bg-gray-200 rounded w-64 animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded w-48 animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded w-48 animate-pulse"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 