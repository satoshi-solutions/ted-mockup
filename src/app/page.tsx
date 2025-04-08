'use client';

import { videos, categories } from '@/data/mockData';
import FeaturedVideo from '@/components/FeaturedVideo';
import VideoCard from '@/components/VideoCard';
import CategoryCard from '@/components/CategoryCard';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/animations';

export default function Home() {
  // Get the first video as the featured video
  const featuredVideo = videos[0];
  
  // Get the next 6 videos for the "Latest Talks" section
  const latestVideos = videos.slice(1, 7);
  
  // Get the first 6 categories for the "Categories" section
  const featuredCategories = categories.slice(0, 6);

  return (
    <div className="space-y-12">
      {/* Featured Video */}
      {featuredVideo && (
        <section>
          <FeaturedVideo video={featuredVideo} />
        </section>
      )}

      {/* Latest Talks */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Talks</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {latestVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </motion.div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {featuredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
