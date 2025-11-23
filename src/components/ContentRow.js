import React, { useRef, useCallback } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentCard from './ContentCard';

function ContentRow({ title, items, rowId }) {
  const scrollContainerRef = useRef(null);
  const rowRef = useRef(null);

  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    autoRestoreFocus: true,
    focusKey: rowId,
    onFocus: () => {
      // Scroll the row into view when any card in this row gets focus
      if (rowRef.current) {
        rowRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  });

  const onCardFocus = useCallback(({ x }) => {
    // Horizontal scroll within the row
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: x - 150,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={(el) => { ref(el); rowRef.current = el; }} className="content-row">
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
