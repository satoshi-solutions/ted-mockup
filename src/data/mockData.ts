export interface Video {
  id: string;
  title: string;
  speaker: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  tags: string[];
  vimeoId: string;
  transcript: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  videoCount: number;
}

// Mock data for videos
export const videos: Video[] = [
  {
    id: '1',
    title: 'The Power of Yet',
    speaker: 'Carol Dweck',
    description: 'Carol Dweck researches "growth mindset" — the idea that we can grow our brain\'s capacity to learn and to solve problems. In this talk, she describes two ways to think about a problem that\'s slightly too hard for you to solve.',
    thumbnail: 'https://placehold.co/600x400/0066cc/ffffff.png?text=The+Power+of+Yet',
    duration: '10:20',
    category: 'Education',
    tags: ['education', 'psychology', 'growth mindset', 'learning'],
    vimeoId: '123456789',
    transcript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.',
  },
  {
    id: '2',
    title: 'How Language Shapes the Way We Think',
    speaker: 'Lera Boroditsky',
    description: 'There are about 7,000 languages spoken around the world -- and they all have different sounds, vocabularies and structures. But do they shape the way we think? Cognitive scientist Lera Boroditsky shares examples of language -- from an Aboriginal community in Australia that uses cardinal directions instead of left and right to the multiple words for blue in Russian -- that suggest the answer is a resounding yes.',
    thumbnail: 'https://placehold.co/600x400/0066cc/ffffff.png?text=How+Language+Shapes+the+Way+We+Think',
    duration: '14:13',
    category: 'Language',
    tags: ['language', 'cognitive science', 'culture', 'psychology'],
    vimeoId: '987654321',
    transcript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.',
  },
  {
    id: '3',
    title: 'The Puzzle of Motivation',
    speaker: 'Dan Pink',
    description: 'Career analyst Dan Pink examines the puzzle of motivation, starting with a fact that social scientists know but most managers don\'t: Traditional rewards aren\'t always as effective as we think. Listen for illuminating stories -- and maybe, a way forward.',
    thumbnail: 'https://placehold.co/600x400/0066cc/ffffff.png?text=The+Puzzle+of+Motivation',
    duration: '18:36',
    category: 'Business',
    tags: ['business', 'motivation', 'psychology', 'management'],
    vimeoId: '456789123',
    transcript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.',
  },
  {
    id: '4',
    title: 'The Power of Vulnerability',
    speaker: 'Brené Brown',
    description: 'Brené Brown studies human connection -- our ability to empathize, belong, love. In a poignant, funny talk, she shares a deep insight from her research, one that sent her on a personal quest to know herself as well as to understand humanity.',
    thumbnail: 'https://placehold.co/600x400/0066cc/ffffff.png?text=The+Power+of+Vulnerability',
    duration: '20:19',
    category: 'Psychology',
    tags: ['psychology', 'vulnerability', 'connection', 'empathy'],
    vimeoId: '789123456',
    transcript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.',
  },
  {
    id: '5',
    title: 'The Art of Misdirection',
    speaker: 'Apollo Robbins',
    description: 'Hailed as the greatest pickpocket in the world, Apollo Robbins studies the quirks of human behavior as he steals your watch. In a hilarious demonstration, Robbins samples the buffet of the Conference\'s open bar and shows how the flaws in our perception make it possible to swipe a wallet and leave it on its owner\'s shoulder while they remain clueless.',
    thumbnail: 'https://placehold.co/600x400/0066cc/ffffff.png?text=The+Art+of+Misdirection',
    duration: '15:42',
    category: 'Entertainment',
    tags: ['entertainment', 'magic', 'psychology', 'perception'],
    vimeoId: '321654987',
    transcript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.',
  },
  {
    id: '6',
    title: 'The Mathematics of Love',
    speaker: 'Hannah Fry',
    description: 'In this charming talk, mathematician Hannah Fry shows patterns in how we look for love, and gives her top three tips (verified by math!) for finding that special someone.',
    thumbnail: 'https://placehold.co/600x400/0066cc/ffffff.png?text=The+Mathematics+of+Love',
    duration: '12:08',
    category: 'Mathematics',
    tags: ['mathematics', 'love', 'relationships', 'patterns'],
    vimeoId: '147258369',
    transcript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.',
  },
  {
    id: '7',
    title: 'The Power of Introverts',
    speaker: 'Susan Cain',
    description: 'In a culture where being social and outgoing are prized above all else, it can be difficult, even shameful, to be an introvert. But, as Susan Cain argues in this passionate talk, introverts bring extraordinary talents and abilities to the world, and should be encouraged and celebrated.',
    thumbnail: 'https://placehold.co/600x400/0066cc/ffffff.png?text=The+Power+of+Introverts',
    duration: '19:04',
    category: 'Psychology',
    tags: ['psychology', 'introversion', 'personality', 'society'],
    vimeoId: '963852741',
    transcript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.',
  },
  {
    id: '8',
    title: 'The Science of Happiness',
    speaker: 'Dan Gilbert',
    description: 'Dan Gilbert, author of "Stumbling on Happiness," challenges the idea that we\'ll be miserable if we don\'t get what we want. Our "psychological immune system" lets us feel truly happy even when things don\'t go as planned.',
    thumbnail: 'https://placehold.co/600x400/0066cc/ffffff.png?text=The+Science+of+Happiness',
    duration: '21:15',
    category: 'Psychology',
    tags: ['psychology', 'happiness', 'neuroscience', 'well-being'],
    vimeoId: '852963741',
    transcript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.',
  },
  {
    id: '9',
    title: 'The Hidden Power of Smiling',
    speaker: 'Ron Gutman',
    description: 'Ron Gutman reviews a raft of studies about smiling, and reveals some surprising results. Did you know your smile can be a predictor of how long you\'ll live -- and that a simple smile has a measurable effect on your overall well-being?',
    thumbnail: 'https://placehold.co/600x400/0066cc/ffffff.png?text=The+Hidden+Power+of+Smiling',
    duration: '07:26',
    category: 'Psychology',
    tags: ['psychology', 'happiness', 'health', 'well-being'],
    vimeoId: '741852963',
    transcript: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.',
  },
];

// Mock data for categories
export const categories: Category[] = [
  {
    id: '1',
    name: 'Education',
    description: 'Talks about learning, teaching, and educational practices.',
    image: 'https://placehold.co/600x400/0066cc/ffffff.png?text=Education',
    videoCount: 1,
  },
  {
    id: '2',
    name: 'Language',
    description: 'Talks about language, linguistics, and communication.',
    image: 'https://placehold.co/600x400/0066cc/ffffff.png?text=Language',
    videoCount: 1,
  },
  {
    id: '3',
    name: 'Business',
    description: 'Talks about business, entrepreneurship, and management.',
    image: 'https://placehold.co/600x400/0066cc/ffffff.png?text=Business',
    videoCount: 1,
  },
  {
    id: '4',
    name: 'Psychology',
    description: 'Talks about psychology, behavior, and the human mind.',
    image: 'https://placehold.co/600x400/0066cc/ffffff.png?text=Psychology',
    videoCount: 4,
  },
  {
    id: '5',
    name: 'Entertainment',
    description: 'Talks about entertainment, arts, and performance.',
    image: 'https://placehold.co/600x400/0066cc/ffffff.png?text=Entertainment',
    videoCount: 1,
  },
  {
    id: '6',
    name: 'Mathematics',
    description: 'Talks about mathematics, patterns, and problem-solving.',
    image: 'https://placehold.co/600x400/0066cc/ffffff.png?text=Mathematics',
    videoCount: 1,
  },
];

// Helper functions
export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};

export const getVideosByCategory = (categoryId: string): Video[] => {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return [];
  
  return videos.filter(video => video.category === category.name);
};

export const getRelatedVideos = (videoId: string, count: number = 3): Video[] => {
  const video = getVideoById(videoId);
  if (!video) return [];
  
  // Get videos from the same category, excluding the current video
  const sameCategoryVideos = videos.filter(
    v => v.category === video.category && v.id !== videoId
  );
  
  // If we have enough videos from the same category, return them
  if (sameCategoryVideos.length >= count) {
    return sameCategoryVideos.slice(0, count);
  }
  
  // Otherwise, add videos with similar tags
  const result = [...sameCategoryVideos];
  const remainingCount = count - result.length;
  
  if (remainingCount > 0) {
    const otherVideos = videos.filter(
      v => v.id !== videoId && !result.some(r => r.id === v.id)
    );
    
    // Sort by number of matching tags
    const sortedByTags = otherVideos.sort((a, b) => {
      const aMatches = a.tags.filter(tag => video.tags.includes(tag)).length;
      const bMatches = b.tags.filter(tag => video.tags.includes(tag)).length;
      return bMatches - aMatches;
    });
    
    result.push(...sortedByTags.slice(0, remainingCount));
  }
  
  return result;
};

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  videos.forEach(video => {
    video.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}; 