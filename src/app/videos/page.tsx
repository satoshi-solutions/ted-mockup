'use client';

import { useState, useEffect } from 'react';
import { videos, categories, getAllTags } from '@/data/mockData';
import VideoCard from '@/components/VideoCard';

export default function VideosPage() {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const allTags = getAllTags();

  useEffect(() => {
    // Filter videos based on selected category, tag, and search query
    let filtered = [...videos];
    
    if (selectedCategory) {
      filtered = filtered.filter(video => video.category === selectedCategory);
    }
    
    if (selectedTag) {
      filtered = filtered.filter(video => video.tags.includes(selectedTag));
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(query) || 
        video.speaker.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredVideos(filtered);
  }, [selectedCategory, selectedTag, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedTag('');
    setSearchQuery('');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Videos</h1>
      
      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Category Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Tag Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ted-blue-500"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">All Tags</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Active Filters */}
        {(selectedCategory || selectedTag || searchQuery) && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {selectedCategory && (
              <span className="bg-ted-blue-100 text-ted-blue-800 text-xs px-2 py-1 rounded-full">
                Category: {selectedCategory}
                <button 
                  className="ml-1 text-ted-blue-600 hover:text-ted-blue-800"
                  onClick={() => setSelectedCategory('')}
                >
                  ×
                </button>
              </span>
            )}
            {selectedTag && (
              <span className="bg-ted-blue-100 text-ted-blue-800 text-xs px-2 py-1 rounded-full">
                Tag: {selectedTag}
                <button 
                  className="ml-1 text-ted-blue-600 hover:text-ted-blue-800"
                  onClick={() => setSelectedTag('')}
                >
                  ×
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="bg-ted-blue-100 text-ted-blue-800 text-xs px-2 py-1 rounded-full">
                Search: {searchQuery}
                <button 
                  className="ml-1 text-ted-blue-600 hover:text-ted-blue-800"
                  onClick={() => setSearchQuery('')}
                >
                  ×
                </button>
              </span>
            )}
            <button
              className="text-sm text-ted-blue-500 hover:text-ted-blue-700"
              onClick={clearFilters}
            >
              Clear all
            </button>
          </div>
        )}
      </div>
      
      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      
      {/* No Results */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No videos found matching your criteria.</p>
        </div>
      )}
    </div>
  );
} 