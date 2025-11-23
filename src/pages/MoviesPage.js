import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentRow from '../components/ContentRow';
import { movieData } from '../data/demoData';

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
