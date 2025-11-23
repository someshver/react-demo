import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

function ContentCard({ item, onFocus }) {
  const navigate = useNavigate();

  const handleSelect = useCallback(() => {
    navigate(`/detail/${item.id}`, { state: { item } });
  }, [navigate, item]);

  const { ref, focused } = useFocusable({
    onEnterPress: handleSelect,
    onFocus: ({ x, y }) => {
      onFocus({ x, y });
    }
  });

  return (
    <div
      ref={ref}
      className={`content-card ${focused ? 'focused' : ''}`}
      onClick={handleSelect}
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
