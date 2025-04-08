'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLoading } from './LoadingProvider';
import { Video } from '@/data/mockData';
import { motion } from 'framer-motion';
import { staggerContainer, scaleIn } from '@/utils/animations';

interface RelatedVideosProps {
  videos: Video[];
  currentVideoId: string;
}

const RelatedVideos = ({ videos, currentVideoId }: RelatedVideosProps) => {
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();

  const handleVideoClick = (videoId: string) => {
    showLoading();
    router.push(`/videos/${videoId}`);
    setTimeout(hideLoading, 500);
  };

  const filteredVideos = videos
    .filter(video => video.id !== currentVideoId)
    .slice(0, 4);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
      <motion.div 
        className="grid gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {filteredVideos.map((video) => (
          <motion.div
            key={video.id}
            className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleVideoClick(video.id)}
            variants={scaleIn}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-40 h-24">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                {video.duration}
              </div>
            </div>
            <div className="flex-1 p-3">
              <h3 className="font-medium line-clamp-2 mb-1">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.speaker}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RelatedVideos; 