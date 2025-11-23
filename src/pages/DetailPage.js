import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

function ActionButton({ label, primary, onSelect }) {
  const { ref, focused } = useFocusable({
    onEnterPress: onSelect
  });

  return (
    <button
      ref={ref}
      className={`detail-btn ${primary ? 'primary' : 'secondary'} ${focused ? 'focused' : ''}`}
      onClick={onSelect}
      data-focusable="true"
      tabIndex={0}
    >
      {label}
    </button>
  );
}

function DetailPage() {
  useParams(); // Used for route matching
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;

  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    focusKey: 'DETAIL_PAGE'
  });

  if (!item) {
    return (
      <div className="detail-page">
        <div className="detail-content">
          <h1>Content Not Found</h1>
          <p>The requested content could not be found.</p>
        </div>
      </div>
    );
  }

  const handlePlay = () => {
    alert(`Playing: ${item.title}`);
  };

  const handleAddToList = () => {
    alert(`Added "${item.title}" to My List`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="detail-page">
        <div
          className="detail-hero"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0.8) 40%, rgba(20, 20, 20, 0.4) 100%), url(${item.image.replace('300/450', '1920/1080')})`
          }}
        >
          <div className="detail-content">
            <h1 className="detail-title">{item.title}</h1>

            <div className="detail-meta">
              <span className="detail-rating">{item.rating}</span>
              <span className="detail-year">{item.year}</span>
              <span className="detail-genre">{item.genre}</span>
              <span className="detail-duration">2h 15m</span>
            </div>

            <p className="detail-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className="detail-info">
              <p><strong>Director:</strong> John Smith</p>
              <p><strong>Cast:</strong> Actor One, Actor Two, Actor Three, Actor Four</p>
              <p><strong>Audio:</strong> English, Spanish, French</p>
              <p><strong>Subtitles:</strong> English, Spanish, French, German</p>
            </div>

            <div className="detail-actions">
              <ActionButton label="Play" primary onSelect={handlePlay} />
              <ActionButton label="Add to List" onSelect={handleAddToList} />
              <ActionButton label="Back" onSelect={handleBack} />
            </div>
          </div>
        </div>

        <div className="detail-additional">
          <h2>More Like This</h2>
          <p className="coming-soon">Related content coming soon...</p>
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default DetailPage;
