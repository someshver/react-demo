import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentRow from '../components/ContentRow';

const movieData = {
  action: {
    title: 'Action & Adventure',
    items: [
      { id: 101, title: 'Thunder Force', image: 'https://picsum.photos/seed/action1/300/450', year: 2024, rating: '8.5', genre: 'Action' },
      { id: 102, title: 'Battle Zone', image: 'https://picsum.photos/seed/action2/300/450', year: 2023, rating: '8.2', genre: 'Action' },
      { id: 103, title: 'Sky Warriors', image: 'https://picsum.photos/seed/action3/300/450', year: 2024, rating: '7.9', genre: 'Action' },
      { id: 104, title: 'Rogue Agent', image: 'https://picsum.photos/seed/action4/300/450', year: 2023, rating: '8.7', genre: 'Action' },
      { id: 105, title: 'Street Kings', image: 'https://picsum.photos/seed/action5/300/450', year: 2024, rating: '8.0', genre: 'Action' },
      { id: 106, title: 'Iron Fist', image: 'https://picsum.photos/seed/action6/300/450', year: 2023, rating: '8.3', genre: 'Action' },
      { id: 107, title: 'Night Ops', image: 'https://picsum.photos/seed/action7/300/450', year: 2024, rating: '7.8', genre: 'Action' },
      { id: 108, title: 'Delta Team', image: 'https://picsum.photos/seed/action8/300/450', year: 2023, rating: '8.6', genre: 'Action' }
    ]
  },
  comedy: {
    title: 'Comedy',
    items: [
      { id: 201, title: 'Funny Business', image: 'https://picsum.photos/seed/comedy1/300/450', year: 2024, rating: '7.5', genre: 'Comedy' },
      { id: 202, title: 'Wedding Chaos', image: 'https://picsum.photos/seed/comedy2/300/450', year: 2023, rating: '7.8', genre: 'Comedy' },
      { id: 203, title: 'Office Party', image: 'https://picsum.photos/seed/comedy3/300/450', year: 2024, rating: '7.2', genre: 'Comedy' },
      { id: 204, title: 'Family Reunion', image: 'https://picsum.photos/seed/comedy4/300/450', year: 2023, rating: '8.0', genre: 'Comedy' },
      { id: 205, title: 'Road Trip', image: 'https://picsum.photos/seed/comedy5/300/450', year: 2024, rating: '7.9', genre: 'Comedy' },
      { id: 206, title: 'College Days', image: 'https://picsum.photos/seed/comedy6/300/450', year: 2023, rating: '7.4', genre: 'Comedy' },
      { id: 207, title: 'Stand Up', image: 'https://picsum.photos/seed/comedy7/300/450', year: 2024, rating: '8.1', genre: 'Comedy' },
      { id: 208, title: 'Neighbors', image: 'https://picsum.photos/seed/comedy8/300/450', year: 2023, rating: '7.6', genre: 'Comedy' }
    ]
  },
  drama: {
    title: 'Drama',
    items: [
      { id: 301, title: 'The Promise', image: 'https://picsum.photos/seed/drama1/300/450', year: 2024, rating: '9.1', genre: 'Drama' },
      { id: 302, title: 'Lost Souls', image: 'https://picsum.photos/seed/drama2/300/450', year: 2023, rating: '8.8', genre: 'Drama' },
      { id: 303, title: 'Redemption', image: 'https://picsum.photos/seed/drama3/300/450', year: 2024, rating: '8.5', genre: 'Drama' },
      { id: 304, title: 'The Trial', image: 'https://picsum.photos/seed/drama4/300/450', year: 2023, rating: '9.0', genre: 'Drama' },
      { id: 305, title: 'Broken Wings', image: 'https://picsum.photos/seed/drama5/300/450', year: 2024, rating: '8.7', genre: 'Drama' },
      { id: 306, title: 'Silent Voice', image: 'https://picsum.photos/seed/drama6/300/450', year: 2023, rating: '8.9', genre: 'Drama' },
      { id: 307, title: 'The Letter', image: 'https://picsum.photos/seed/drama7/300/450', year: 2024, rating: '8.4', genre: 'Drama' },
      { id: 308, title: 'Crossroads', image: 'https://picsum.photos/seed/drama8/300/450', year: 2023, rating: '8.6', genre: 'Drama' }
    ]
  },
  thriller: {
    title: 'Thriller',
    items: [
      { id: 401, title: 'Mind Hunter', image: 'https://picsum.photos/seed/thriller1/300/450', year: 2024, rating: '8.9', genre: 'Thriller' },
      { id: 402, title: 'The Witness', image: 'https://picsum.photos/seed/thriller2/300/450', year: 2023, rating: '8.4', genre: 'Thriller' },
      { id: 403, title: 'Dark Secrets', image: 'https://picsum.photos/seed/thriller3/300/450', year: 2024, rating: '8.1', genre: 'Thriller' },
      { id: 404, title: 'The Chase', image: 'https://picsum.photos/seed/thriller4/300/450', year: 2023, rating: '8.7', genre: 'Thriller' },
      { id: 405, title: 'Conspiracy', image: 'https://picsum.photos/seed/thriller5/300/450', year: 2024, rating: '8.3', genre: 'Thriller' },
      { id: 406, title: 'Night Watch', image: 'https://picsum.photos/seed/thriller6/300/450', year: 2023, rating: '8.0', genre: 'Thriller' },
      { id: 407, title: 'The Pattern', image: 'https://picsum.photos/seed/thriller7/300/450', year: 2024, rating: '8.6', genre: 'Thriller' },
      { id: 408, title: 'Blind Spot', image: 'https://picsum.photos/seed/thriller8/300/450', year: 2023, rating: '8.2', genre: 'Thriller' }
    ]
  },
  scifi: {
    title: 'Sci-Fi & Fantasy',
    items: [
      { id: 501, title: 'Star Colony', image: 'https://picsum.photos/seed/scifi1/300/450', year: 2024, rating: '9.2', genre: 'Sci-Fi' },
      { id: 502, title: 'Time Loop', image: 'https://picsum.photos/seed/scifi2/300/450', year: 2023, rating: '8.8', genre: 'Sci-Fi' },
      { id: 503, title: 'Alien Contact', image: 'https://picsum.photos/seed/scifi3/300/450', year: 2024, rating: '8.5', genre: 'Sci-Fi' },
      { id: 504, title: 'The Matrix 5', image: 'https://picsum.photos/seed/scifi4/300/450', year: 2023, rating: '9.0', genre: 'Sci-Fi' },
      { id: 505, title: 'Quantum Realm', image: 'https://picsum.photos/seed/scifi5/300/450', year: 2024, rating: '8.7', genre: 'Sci-Fi' },
      { id: 506, title: 'Robot Wars', image: 'https://picsum.photos/seed/scifi6/300/450', year: 2023, rating: '8.3', genre: 'Sci-Fi' },
      { id: 507, title: 'Parallel World', image: 'https://picsum.photos/seed/scifi7/300/450', year: 2024, rating: '8.9', genre: 'Sci-Fi' },
      { id: 508, title: 'Cyber City', image: 'https://picsum.photos/seed/scifi8/300/450', year: 2023, rating: '8.4', genre: 'Sci-Fi' }
    ]
  },
  horror: {
    title: 'Horror',
    items: [
      { id: 601, title: 'The Haunting', image: 'https://picsum.photos/seed/horror1/300/450', year: 2024, rating: '7.9', genre: 'Horror' },
      { id: 602, title: 'Nightmare', image: 'https://picsum.photos/seed/horror2/300/450', year: 2023, rating: '7.5', genre: 'Horror' },
      { id: 603, title: 'Evil Within', image: 'https://picsum.photos/seed/horror3/300/450', year: 2024, rating: '7.8', genre: 'Horror' },
      { id: 604, title: 'Ghost Story', image: 'https://picsum.photos/seed/horror4/300/450', year: 2023, rating: '8.0', genre: 'Horror' },
      { id: 605, title: 'The Ritual', image: 'https://picsum.photos/seed/horror5/300/450', year: 2024, rating: '7.7', genre: 'Horror' },
      { id: 606, title: 'Dark House', image: 'https://picsum.photos/seed/horror6/300/450', year: 2023, rating: '7.6', genre: 'Horror' },
      { id: 607, title: 'The Conjuring', image: 'https://picsum.photos/seed/horror7/300/450', year: 2024, rating: '8.2', genre: 'Horror' },
      { id: 608, title: 'Possession', image: 'https://picsum.photos/seed/horror8/300/450', year: 2023, rating: '7.4', genre: 'Horror' }
    ]
  }
};

function MoviesPage() {
  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    focusKey: 'MOVIES_PAGE'
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="page-content">
        <div className="page-header">
          <h1>Movies</h1>
          <p>Explore our collection of movies across all genres</p>
        </div>

        <div className="content-rows">
          <ContentRow
            title={movieData.action.title}
            items={movieData.action.items}
            rowId="movies-action"
          />
          <ContentRow
            title={movieData.comedy.title}
            items={movieData.comedy.items}
            rowId="movies-comedy"
          />
          <ContentRow
            title={movieData.drama.title}
            items={movieData.drama.items}
            rowId="movies-drama"
          />
          <ContentRow
            title={movieData.thriller.title}
            items={movieData.thriller.items}
            rowId="movies-thriller"
          />
          <ContentRow
            title={movieData.scifi.title}
            items={movieData.scifi.items}
            rowId="movies-scifi"
          />
          <ContentRow
            title={movieData.horror.title}
            items={movieData.horror.items}
            rowId="movies-horror"
          />
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default MoviesPage;
