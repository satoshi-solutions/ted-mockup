'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLoading } from './LoadingProvider';
import { Video } from '@/data/mockData';
import { motion } from 'framer-motion';
import { scaleIn } from '@/utils/animations';

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();

  if (!video) {
    return null;
  }

  const handleClick = () => {
    showLoading();
    router.push(`/videos/${video.id}`);
    // Hide loading after a short delay to ensure the loading state is visible
    setTimeout(hideLoading, 500);
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-48">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{video.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{video.speaker}</p>
        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="bg-ted-blue-100 text-ted-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard; 