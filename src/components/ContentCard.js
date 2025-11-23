import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFocusable, getCurrentFocusKey } from '@noriginmedia/norigin-spatial-navigation';

function ContentCard({ item, onFocus }) {
  const navigate = useNavigate();

  const handleSelect = useCallback(() => {
    // Save current focus key before navigating
    const currentFocusKey = getCurrentFocusKey();
    navigate(`/detail/${item.id}`, {
      state: {
        item,
        previousFocusKey: currentFocusKey
      }
    });
  }, [navigate, item]);

  const { ref, focused } = useFocusable({
    onEnterPress: handleSelect,
    onFocus: ({ x, y, node }) => {
      onFocus({ x, y });
      // Scroll the card into view when focused - use auto for sync with focus
      if (node) {
        node.scrollIntoView({
          behavior: 'auto',
          block: 'nearest',
          inline: 'end'
        });
      }
    },
    focusKey: `card-${item.id}`
  });

  return (
    <div
      ref={ref}
      className={`content-card ${focused ? 'focused' : ''}`}
      onClick={handleSelect}
      data-focusable="true"
      tabIndex={focused ? 0 : -1}
    >
      <div className="card-image-container">
        <img
          src={item.image}
          alt={item.title}
          className="card-image"
          loading="lazy"
        />
        <div className="card-overlay">
          <span className="card-rating">{item.rating}</span>
        </div>
      </div>
      <div className="card-info">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-meta">
          <span className="card-year">{item.year}</span>
          <span className="card-genre">{item.genre}</span>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
