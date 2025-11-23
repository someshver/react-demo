import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentRow from '../components/ContentRow';

const myListData = {
  continueWatching: {
    title: 'Continue Watching',
    items: [
      { id: 1201, title: 'Breaking Point', image: 'https://picsum.photos/seed/cont1/300/450', year: 2024, rating: '9.3', genre: 'Drama' },
      { id: 1202, title: 'The Heist', image: 'https://picsum.photos/seed/cont2/300/450', year: 2023, rating: '8.9', genre: 'Crime' },
      { id: 1203, title: 'Mind Hunter', image: 'https://picsum.photos/seed/cont3/300/450', year: 2024, rating: '8.9', genre: 'Thriller' },
      { id: 1204, title: 'Star Colony', image: 'https://picsum.photos/seed/cont4/300/450', year: 2024, rating: '9.2', genre: 'Sci-Fi' },
      { id: 1205, title: 'The Promise', image: 'https://picsum.photos/seed/cont5/300/450', year: 2024, rating: '9.1', genre: 'Drama' }
    ]
  },
  myList: {
    title: 'My List',
    items: [
      { id: 1301, title: 'Thunder Force', image: 'https://picsum.photos/seed/list1/300/450', year: 2024, rating: '8.5', genre: 'Action' },
      { id: 1302, title: 'Cosmic Journey', image: 'https://picsum.photos/seed/list2/300/450', year: 2024, rating: '9.1', genre: 'Sci-Fi' },
      { id: 1303, title: 'Dark Waters', image: 'https://picsum.photos/seed/list3/300/450', year: 2023, rating: '7.8', genre: 'Thriller' },
      { id: 1304, title: 'Mountain Echo', image: 'https://picsum.photos/seed/list4/300/450', year: 2024, rating: '8.2', genre: 'Drama' },
      { id: 1305, title: 'Neon Nights', image: 'https://picsum.photos/seed/list5/300/450', year: 2023, rating: '8.7', genre: 'Action' },
      { id: 1306, title: 'Silent Storm', image: 'https://picsum.photos/seed/list6/300/450', year: 2024, rating: '7.9', genre: 'Drama' },
      { id: 1307, title: 'Crystal Maze', image: 'https://picsum.photos/seed/list7/300/450', year: 2023, rating: '8.4', genre: 'Adventure' },
      { id: 1308, title: 'Urban Legends', image: 'https://picsum.photos/seed/list8/300/450', year: 2024, rating: '8.0', genre: 'Horror' }
    ]
  },
  recentlyAdded: {
    title: 'Recently Added to List',
    items: [
      { id: 1401, title: 'Phantom Code', image: 'https://picsum.photos/seed/recent1/300/450', year: 2024, rating: '8.5', genre: 'Thriller' },
      { id: 1402, title: 'Love Story', image: 'https://picsum.photos/seed/recent2/300/450', year: 2024, rating: '7.9', genre: 'Romance' },
      { id: 1403, title: 'Desert Storm', image: 'https://picsum.photos/seed/recent3/300/450', year: 2024, rating: '8.1', genre: 'Action' },
      { id: 1404, title: 'Mind Games', image: 'https://picsum.photos/seed/recent4/300/450', year: 2024, rating: '8.8', genre: 'Psychological' },
      { id: 1405, title: 'Forest Tales', image: 'https://picsum.photos/seed/recent5/300/450', year: 2024, rating: '7.4', genre: 'Animation' },
      { id: 1406, title: 'Speed Racers', image: 'https://picsum.photos/seed/recent6/300/450', year: 2024, rating: '8.3', genre: 'Sports' }
    ]
  },
  watchAgain: {
    title: 'Watch Again',
    items: [
      { id: 1501, title: 'Eternal Flame', image: 'https://picsum.photos/seed/again1/300/450', year: 2023, rating: '9.0', genre: 'Romance' },
      { id: 1502, title: 'Steel Thunder', image: 'https://picsum.photos/seed/again2/300/450', year: 2024, rating: '8.6', genre: 'Action' },
      { id: 1503, title: 'Golden Hour', image: 'https://picsum.photos/seed/again3/300/450', year: 2024, rating: '8.3', genre: 'Drama' },
      { id: 1504, title: 'Night Rider', image: 'https://picsum.photos/seed/again4/300/450', year: 2024, rating: '7.7', genre: 'Thriller' },
      { id: 1505, title: 'City Lights', image: 'https://picsum.photos/seed/again5/300/450', year: 2024, rating: '9.2', genre: 'Comedy' },
      { id: 1506, title: 'Ocean Depths', image: 'https://picsum.photos/seed/again6/300/450', year: 2023, rating: '8.8', genre: 'Documentary' }
    ]
  }
};

function MyListPage() {
  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
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
