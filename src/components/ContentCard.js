import React, { useCallback } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

function ContentCard({ item, onFocus }) {
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      alert(`Selected: ${item.title}`);
    },
    onFocus: ({ x, y }) => {
      onFocus({ x, y });
    }
  });

  const handleClick = useCallback(() => {
    alert(`Selected: ${item.title}`);
  }, [item.title]);

  return (
    <div
      ref={ref}
      className={`content-card ${focused ? 'focused' : ''}`}
      onClick={handleClick}
      data-focusable="true"
      tabIndex={0}
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
