import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentRow from '../components/ContentRow';
import { tvShowsData } from '../data/demoData';

function TVShowsPage() {
  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    isFocusBoundary: false,
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
