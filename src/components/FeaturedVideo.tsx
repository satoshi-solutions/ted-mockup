'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLoading } from './LoadingProvider';
import { Video } from '@/data/mockData';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '@/utils/animations';

interface FeaturedVideoProps {
  video: Video;
}

const FeaturedVideo = ({ video }: FeaturedVideoProps) => {
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();

  if (!video) {
    return null;
  }

  const handleWatchNow = () => {
    showLoading();
    router.push(`/videos/${video.id}`);
    setTimeout(hideLoading, 500);
  };

  return (
    <motion.div 
      className="relative h-[500px] rounded-xl overflow-hidden"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <Image
        src={video.thumbnail}
        alt={video.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <motion.div variants={slideIn} className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{video.title}</h1>
          <p className="text-xl mb-6 opacity-90">{video.speaker}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-ted-blue-500 text-white px-4 py-2 rounded-full">
              {video.duration}
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full">
              {video.category}
            </span>
          </div>
          <motion.button
            className="bg-ted-red-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-ted-red-600 transition-colors"
            onClick={handleWatchNow}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Now
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedVideo; 