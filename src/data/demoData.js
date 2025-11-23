// Helper function to generate items
const generateItems = (prefix, startId, count, genres) => {
  const titles = [
    'The Last Kingdom', 'Cosmic Journey', 'Dark Waters', 'Mountain Echo', 'Neon Nights',
    'Silent Storm', 'Crystal Maze', 'Urban Legends', 'Eternal Flame', 'Steel Thunder',
    'Whispers', 'Golden Hour', 'Frozen Peak', 'Night Rider', 'Ocean Depths',
    'City Lights', 'Phantom Code', 'Love Story', 'Desert Storm', 'Mind Games',
    'Forest Tales', 'Speed Racers', 'Haunted', 'Royal Affairs', 'Planet Earth'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    title: `${titles[i % titles.length]}${Math.floor(i / titles.length) > 0 ? ' ' + (Math.floor(i / titles.length) + 1) : ''}`,
    image: `https://picsum.photos/seed/${prefix}${i + 1}/300/450`,
    year: 2023 + (i % 2),
    rating: (7 + Math.random() * 2.5).toFixed(1),
    genre: genres[i % genres.length]
  }));
};

export const demoData = {
  trending: {
    title: 'Trending Now',
    items: generateItems('trending', 1, 20, ['Action', 'Sci-Fi', 'Thriller', 'Drama', 'Adventure'])
  },
  popular: {
    title: 'Popular Movies',
    items: generateItems('popular', 100, 20, ['Romance', 'Action', 'Mystery', 'Drama', 'Comedy'])
  },
  tvShows: {
    title: 'TV Shows',
    items: generateItems('tvshow', 200, 20, ['Drama', 'Documentary', 'Mystery', 'Sci-Fi', 'Comedy'])
  },
  newReleases: {
    title: 'New Releases',
    items: generateItems('newrelease', 300, 20, ['Thriller', 'Romance', 'Action', 'Horror', 'Animation'])
  },
  documentaries: {
    title: 'Documentaries',
    items: generateItems('documentary', 400, 20, ['Nature', 'Science', 'History', 'Technology', 'Sports'])
  }
};

// Movie page data with genre-specific content
export const movieData = {
  action: {
    title: 'Action & Adventure',
    items: generateItems('action', 500, 20, ['Action', 'Adventure', 'Thriller'])
  },
  comedy: {
    title: 'Comedy',
    items: generateItems('comedy', 600, 20, ['Comedy', 'Rom-Com', 'Satire'])
  },
  drama: {
    title: 'Drama',
    items: generateItems('drama', 700, 20, ['Drama', 'Period', 'Biography'])
  },
  thriller: {
    title: 'Thriller',
    items: generateItems('thriller', 800, 20, ['Thriller', 'Mystery', 'Suspense'])
  },
  scifi: {
    title: 'Sci-Fi & Fantasy',
    items: generateItems('scifi', 900, 20, ['Sci-Fi', 'Fantasy', 'Dystopia'])
  },
  horror: {
    title: 'Horror',
    items: generateItems('horror', 1000, 20, ['Horror', 'Supernatural', 'Slasher'])
  }
};

// TV Shows page data
export const tvShowsData = {
  trending: {
    title: 'Trending TV Shows',
    items: generateItems('tvtrend', 1100, 20, ['Drama', 'Crime', 'Medical', 'Legal', 'Thriller'])
  },
  bingeWorthy: {
    title: 'Binge-Worthy',
    items: generateItems('binge', 1200, 20, ['Drama', 'Crime', 'Adventure', 'Thriller', 'Biography'])
  },
  comedy: {
    title: 'Comedy Series',
    items: generateItems('sitcom', 1300, 20, ['Comedy', 'Rom-Com', 'Satire', 'Workplace'])
  },
  scifi: {
    title: 'Sci-Fi & Fantasy Series',
    items: generateItems('scifitv', 1400, 20, ['Sci-Fi', 'Fantasy', 'Superhero', 'Dystopia'])
  },
  crime: {
    title: 'Crime & Mystery',
    items: generateItems('crime', 1500, 20, ['Crime', 'Mystery', 'Procedural', 'Noir'])
  }
};

// My List page data
export const myListData = {
  continueWatching: {
    title: 'Continue Watching',
    items: generateItems('continue', 1600, 15, ['Drama', 'Crime', 'Thriller', 'Sci-Fi', 'Action'])
  },
  myList: {
    title: 'My List',
    items: generateItems('mylist', 1700, 20, ['Action', 'Sci-Fi', 'Thriller', 'Drama', 'Adventure'])
  },
  recentlyAdded: {
    title: 'Recently Added to List',
    items: generateItems('recent', 1800, 18, ['Thriller', 'Romance', 'Action', 'Psychological', 'Animation'])
  },
  watchAgain: {
    title: 'Watch Again',
    items: generateItems('again', 1900, 16, ['Romance', 'Action', 'Drama', 'Thriller', 'Comedy'])
  }
};
