import { getVideoById, getRelatedVideos } from '@/data/mockData';
import VideoPlayer from '@/components/VideoPlayer';
import TranscriptViewer from '@/components/TranscriptViewer';
import RelatedVideos from '@/components/RelatedVideos';

export default function VideoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const video = getVideoById(params.id);
  const relatedVideos = getRelatedVideos(params.id);

  if (!video) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VideoPlayer vimeoId={video.vimeoId} />
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{video.title}</h1>
            <p className="text-gray-600 mb-4">{video.description}</p>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>{video.speaker}</span>
              <span className="mx-2">•</span>
              <span>{video.duration}</span>
            </div>
            <TranscriptViewer transcript={video.transcript} />
          </div>
        </div>
        <div className="lg:col-span-1">
          <RelatedVideos videos={relatedVideos} currentVideoId={params.id} />
        </div>
      </div>
    </div>
  );
} 