import React, { useRef, useCallback } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentCard from './ContentCard';

function ContentRow({ title, items, rowId }) {
  const scrollContainerRef = useRef(null);
  const rowElementRef = useRef(null);

  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    autoRestoreFocus: true,
    focusKey: rowId
  });

  // Combine refs
  const setRefs = useCallback((el) => {
    rowElementRef.current = el;
    if (typeof ref === 'function') {
      ref(el);
    } else if (ref) {
      ref.current = el;
    }
  }, [ref]);

  const onCardFocus = useCallback(({ x }) => {
    // Horizontal scroll within the row
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: x - 150,
        behavior: 'smooth'
      });
    }
    // Vertical scroll to keep row in view
    if (rowElementRef.current) {
      rowElementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={setRefs} className="content-row">
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
