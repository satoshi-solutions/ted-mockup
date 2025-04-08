import { getVideoById, getRelatedVideos } from '@/data/mockData';
import { notFound } from 'next/navigation';
import RelatedVideos from '@/components/RelatedVideos';

interface VideoPageProps {
  params: {
    id: string;
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const video = await getVideoById(params.id);
  
  if (!video) {
    notFound();
  }
  
  const relatedVideos = getRelatedVideos(params.id);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="aspect-video relative bg-gray-900 rounded-lg overflow-hidden mb-6">
            <iframe
              src={`https://player.vimeo.com/video/${video.vimeoId}?h=1234567890&title=0&byline=0&portrait=0`}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">{video.speaker}</span>
            <span>{video.duration}</span>
          </div>
          
          <div className="prose max-w-none mb-8">
            <p>{video.description}</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Transcript</h2>
            <div className="prose max-w-none">
              <p>{video.transcript}</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <RelatedVideos videos={relatedVideos} />
        </div>
      </div>
    </div>
  );
} 