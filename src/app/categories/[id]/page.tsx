import { getVideosByCategory } from '@/data/mockData';
import VideoCard from '@/components/VideoCard';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryVideos = getVideosByCategory(params.id);
  
  // If no videos found for this category, show 404
  if (categoryVideos.length === 0) {
    notFound();
  }
  
  // Get the category name from the first video
  const categoryName = categoryVideos[0].category;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{categoryName}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Browse all talks in the {categoryName} category.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {categoryVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No videos found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
