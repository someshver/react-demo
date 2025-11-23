import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentRow from '../components/ContentRow';
import { myListData } from '../data/demoData';

function MyListPage() {
  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    isFocusBoundary: false,
    focusKey: 'MYLIST_PAGE'
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="page-content">
        <div className="page-header">
          <h1>My List</h1>
          <p>Your personal collection of saved content</p>
        </div>

        <div className="content-rows">
          <ContentRow
            title={myListData.continueWatching.title}
            items={myListData.continueWatching.items}
            rowId="mylist-continue"
          />
          <ContentRow
            title={myListData.myList.title}
            items={myListData.myList.items}
            rowId="mylist-list"
          />
          <ContentRow
            title={myListData.recentlyAdded.title}
            items={myListData.recentlyAdded.items}
            rowId="mylist-recent"
          />
          <ContentRow
            title={myListData.watchAgain.title}
            items={myListData.watchAgain.items}
            rowId="mylist-watchagain"
          />
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default MyListPage;
