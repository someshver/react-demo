import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentRow from '../components/ContentRow';

const tvShowsData = {
  trending: {
    title: 'Trending TV Shows',
    items: [
      { id: 701, title: 'Breaking Point', image: 'https://picsum.photos/seed/tv1/300/450', year: 2024, rating: '9.3', genre: 'Drama' },
      { id: 702, title: 'The Heist', image: 'https://picsum.photos/seed/tv2/300/450', year: 2023, rating: '8.9', genre: 'Crime' },
      { id: 703, title: 'Dynasty Wars', image: 'https://picsum.photos/seed/tv3/300/450', year: 2024, rating: '8.7', genre: 'Drama' },
      { id: 704, title: 'Medical Team', image: 'https://picsum.photos/seed/tv4/300/450', year: 2023, rating: '8.5', genre: 'Medical' },
      { id: 705, title: 'Legal Eagles', image: 'https://picsum.photos/seed/tv5/300/450', year: 2024, rating: '8.8', genre: 'Legal' },
      { id: 706, title: 'The Agency', image: 'https://picsum.photos/seed/tv6/300/450', year: 2023, rating: '9.0', genre: 'Thriller' },
      { id: 707, title: 'Family Matters', image: 'https://picsum.photos/seed/tv7/300/450', year: 2024, rating: '8.4', genre: 'Comedy' },
      { id: 708, title: 'Survival', image: 'https://picsum.photos/seed/tv8/300/450', year: 2023, rating: '8.6', genre: 'Reality' }
    ]
  },
  bingeWorthy: {
    title: 'Binge-Worthy',
    items: [
      { id: 801, title: 'The Circle', image: 'https://picsum.photos/seed/binge1/300/450', year: 2024, rating: '9.1', genre: 'Drama' },
      { id: 802, title: 'Money Trail', image: 'https://picsum.photos/seed/binge2/300/450', year: 2023, rating: '8.8', genre: 'Crime' },
      { id: 803, title: 'Lost Island', image: 'https://picsum.photos/seed/binge3/300/450', year: 2024, rating: '8.5', genre: 'Adventure' },
      { id: 804, title: 'The Vault', image: 'https://picsum.photos/seed/binge4/300/450', year: 2023, rating: '9.2', genre: 'Thriller' },
      { id: 805, title: 'Street Life', image: 'https://picsum.photos/seed/binge5/300/450', year: 2024, rating: '8.7', genre: 'Drama' },
      { id: 806, title: 'Tech Titans', image: 'https://picsum.photos/seed/binge6/300/450', year: 2023, rating: '8.9', genre: 'Biography' },
      { id: 807, title: 'The Empire', image: 'https://picsum.photos/seed/binge7/300/450', year: 2024, rating: '8.4', genre: 'History' },
      { id: 808, title: 'Midnight Club', image: 'https://picsum.photos/seed/binge8/300/450', year: 2023, rating: '8.6', genre: 'Horror' }
    ]
  },
  comedy: {
    title: 'Comedy Series',
    items: [
      { id: 901, title: 'Office Life', image: 'https://picsum.photos/seed/sitcom1/300/450', year: 2024, rating: '8.5', genre: 'Comedy' },
      { id: 902, title: 'Friends Forever', image: 'https://picsum.photos/seed/sitcom2/300/450', year: 2023, rating: '8.8', genre: 'Comedy' },
      { id: 903, title: 'The Roommates', image: 'https://picsum.photos/seed/sitcom3/300/450', year: 2024, rating: '8.2', genre: 'Comedy' },
      { id: 904, title: 'Modern Love', image: 'https://picsum.photos/seed/sitcom4/300/450', year: 2023, rating: '8.0', genre: 'Rom-Com' },
      { id: 905, title: 'Brooklyn Life', image: 'https://picsum.photos/seed/sitcom5/300/450', year: 2024, rating: '9.0', genre: 'Comedy' },
      { id: 906, title: 'The Good Life', image: 'https://picsum.photos/seed/sitcom6/300/450', year: 2023, rating: '8.4', genre: 'Comedy' },
      { id: 907, title: 'Workplace', image: 'https://picsum.photos/seed/sitcom7/300/450', year: 2024, rating: '8.3', genre: 'Comedy' },
      { id: 908, title: 'City Living', image: 'https://picsum.photos/seed/sitcom8/300/450', year: 2023, rating: '8.6', genre: 'Comedy' }
    ]
  },
  scifi: {
    title: 'Sci-Fi & Fantasy Series',
    items: [
      { id: 1001, title: 'Westworld', image: 'https://picsum.photos/seed/scifitv1/300/450', year: 2024, rating: '9.0', genre: 'Sci-Fi' },
      { id: 1002, title: 'Dragon Age', image: 'https://picsum.photos/seed/scifitv2/300/450', year: 2023, rating: '9.3', genre: 'Fantasy' },
      { id: 1003, title: 'The Expanse', image: 'https://picsum.photos/seed/scifitv3/300/450', year: 2024, rating: '8.8', genre: 'Sci-Fi' },
      { id: 1004, title: 'Altered States', image: 'https://picsum.photos/seed/scifitv4/300/450', year: 2023, rating: '8.5', genre: 'Sci-Fi' },
      { id: 1005, title: 'Magic Realm', image: 'https://picsum.photos/seed/scifitv5/300/450', year: 2024, rating: '8.7', genre: 'Fantasy' },
      { id: 1006, title: 'Time Wars', image: 'https://picsum.photos/seed/scifitv6/300/450', year: 2023, rating: '8.9', genre: 'Sci-Fi' },
      { id: 1007, title: 'The Witcher', image: 'https://picsum.photos/seed/scifitv7/300/450', year: 2024, rating: '8.6', genre: 'Fantasy' },
      { id: 1008, title: 'Dark Matter', image: 'https://picsum.photos/seed/scifitv8/300/450', year: 2023, rating: '8.4', genre: 'Sci-Fi' }
    ]
  },
  crime: {
    title: 'Crime & Mystery',
    items: [
      { id: 1101, title: 'True Detective', image: 'https://picsum.photos/seed/crime1/300/450', year: 2024, rating: '9.1', genre: 'Crime' },
      { id: 1102, title: 'The Investigation', image: 'https://picsum.photos/seed/crime2/300/450', year: 2023, rating: '8.7', genre: 'Mystery' },
      { id: 1103, title: 'Cold Case', image: 'https://picsum.photos/seed/crime3/300/450', year: 2024, rating: '8.5', genre: 'Crime' },
      { id: 1104, title: 'Homicide', image: 'https://picsum.photos/seed/crime4/300/450', year: 2023, rating: '8.8', genre: 'Crime' },
      { id: 1105, title: 'The Profiler', image: 'https://picsum.photos/seed/crime5/300/450', year: 2024, rating: '8.9', genre: 'Crime' },
      { id: 1106, title: 'Missing', image: 'https://picsum.photos/seed/crime6/300/450', year: 2023, rating: '8.4', genre: 'Mystery' },
      { id: 1107, title: 'FBI Files', image: 'https://picsum.photos/seed/crime7/300/450', year: 2024, rating: '8.6', genre: 'Crime' },
      { id: 1108, title: 'The Confession', image: 'https://picsum.photos/seed/crime8/300/450', year: 2023, rating: '8.3', genre: 'Drama' }
    ]
  }
};

function TVShowsPage() {
  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    focusKey: 'TVSHOWS_PAGE'
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="page-content">
        <div className="page-header">
          <h1>TV Shows</h1>
          <p>Discover the best TV series across all genres</p>
        </div>

        <div className="content-rows">
          <ContentRow
            title={tvShowsData.trending.title}
            items={tvShowsData.trending.items}
            rowId="tv-trending"
          />
          <ContentRow
            title={tvShowsData.bingeWorthy.title}
            items={tvShowsData.bingeWorthy.items}
            rowId="tv-bingeworthy"
          />
          <ContentRow
            title={tvShowsData.comedy.title}
            items={tvShowsData.comedy.items}
            rowId="tv-comedy"
          />
          <ContentRow
            title={tvShowsData.scifi.title}
            items={tvShowsData.scifi.items}
            rowId="tv-scifi"
          />
          <ContentRow
            title={tvShowsData.crime.title}
            items={tvShowsData.crime.items}
            rowId="tv-crime"
          />
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default TVShowsPage;
