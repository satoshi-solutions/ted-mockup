import { categories } from '@/data/mockData';
import CategoryCard from '@/components/CategoryCard';

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <p className="text-gray-600 mb-8">
        Browse talks by category to find content that interests you.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
} 