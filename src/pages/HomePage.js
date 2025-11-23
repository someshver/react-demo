import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import { demoData } from '../data/demoData';
import ContentRow from '../components/ContentRow';

function HomePage() {
  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    isFocusBoundary: false,
    focusKey: 'HOME_PAGE'
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="page-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to StreamFlix</h1>
            <p>Watch unlimited movies, TV shows, and more.</p>
            <div className="hero-buttons">
              <button className="btn-play">Play</button>
              <button className="btn-info">More Info</button>
            </div>
          </div>
        </section>

        <div className="content-rows">
          <ContentRow
            title={demoData.trending.title}
            items={demoData.trending.items}
            rowId="home-trending"
          />
          <ContentRow
            title={demoData.popular.title}
            items={demoData.popular.items}
            rowId="home-popular"
          />
          <ContentRow
            title={demoData.tvShows.title}
            items={demoData.tvShows.items}
            rowId="home-tvshows"
          />
          <ContentRow
            title={demoData.newReleases.title}
            items={demoData.newReleases.items}
            rowId="home-newreleases"
          />
          <ContentRow
            title={demoData.documentaries.title}
            items={demoData.documentaries.items}
            rowId="home-documentaries"
          />
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default HomePage;
