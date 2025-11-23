import React, { useRef, useCallback } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import ContentCard from './ContentCard';

function ContentRow({ title, items, rowId }) {
  const scrollContainerRef = useRef(null);
  const rowElementRef = useRef(null);

  const { ref } = useFocusable({
    focusable: false,
    trackChildren: true,
    isFocusBoundary: false,
    saveLastFocusedChild: true,
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
    // Horizontal scroll within the row - use instant for sync with focus
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: x - 150,
        behavior: 'auto'
      });
    }
    // Vertical scroll to keep row in view
    if (rowElementRef.current) {
      rowElementRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'nearest'
      });
    }
  }, []);

  return (
    <div ref={setRefs} className="content-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-content" ref={scrollContainerRef}>
        {items.map((item, index) => (
          <ContentCard
            key={item.id}
            item={item}
            rowId={rowId}
            cardIndex={index}
            onFocus={onCardFocus}
          />
        ))}
      </div>
    </div>
  );
}

export default ContentRow;
