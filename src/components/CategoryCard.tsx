'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLoading } from './LoadingProvider';
import { Category } from '@/data/mockData';
import { motion } from 'framer-motion';
import { scaleIn } from '@/utils/animations';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();

  if (!category) {
    return null;
  }

  const handleClick = () => {
    showLoading();
    router.push(`/categories/${category.id}`);
    // Hide loading after a short delay to ensure the loading state is visible
    setTimeout(hideLoading, 500);
  };

  return (
    <motion.div 
      className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
      onClick={handleClick}
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
        <p className="text-sm opacity-90 mb-2 line-clamp-2">{category.description}</p>
        <p className="text-sm font-medium">{category.videoCount} videos</p>
      </div>
    </motion.div>
  );
};

export default CategoryCard; 