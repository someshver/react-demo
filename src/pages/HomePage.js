import React from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { demoData } from '../data/demoData';
import ContentRow from '../components/ContentRow';

function HeroButton({ label, focusKey, className, onClick }) {
  const { ref, focused } = useFocusable({
    focusKey,
    onEnterPress: onClick
  });

  return (
    <button
      ref={ref}
      className={`${className} ${focused ? 'focused' : ''}`}
      onClick={onClick}
      data-focusable="true"
    >
      {label}
    </button>
  );
}

function HomePage() {
  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    isFocusBoundary: false,
    focusKey: 'HOME_PAGE'
  });

  return (
    <div ref={ref} className="page-content">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to StreamFlix</h1>
          <p>Watch unlimited movies, TV shows, and more.</p>
          <div className="hero-buttons">
            <HeroButton
              label="Play"
              focusKey="HERO_PLAY"
              className="btn-play"
              onClick={() => console.log('Play clicked')}
            />
            <HeroButton
              label="More Info"
              focusKey="HERO_INFO"
              className="btn-info"
              onClick={() => console.log('More Info clicked')}
            />
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
  );
}

export default HomePage;
