import React, { useRef, useCallback } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentCard from './ContentCard';

function ContentRow({ title, items, rowId }) {
  const scrollContainerRef = useRef(null);

  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    autoRestoreFocus: true,
    focusKey: rowId
  });

  const onCardFocus = useCallback(({ x }) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: x - 100,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="content-row">
        <h2 className="row-title">{title}</h2>
        <div className="row-content" ref={scrollContainerRef}>
          {items.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              onFocus={onCardFocus}
            />
          ))}
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default ContentRow;
