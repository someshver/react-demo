import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  init,
  useFocusable,
  FocusContext,
  setFocus,
  getCurrentFocusKey
} from '@noriginmedia/norigin-spatial-navigation';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import MyListPage from './pages/MyListPage';
import DetailPage from './pages/DetailPage';

// Initialize spatial navigation with TV-optimized settings
init({
  debug: false,
  visualDebug: false,
  distanceCalculationMethod: 'center',
  straightOverlapThreshold: 0.5
});

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: 'APP_ROOT'
  });

  // Get the default focus key based on current route
  const getDefaultFocusKey = useCallback(() => {
    const path = location.pathname;
    if (path === '/') return 'home-trending';
    if (path === '/movies') return 'movies-action';
    if (path === '/tv-shows') return 'tv-trending';
    if (path === '/my-list') return 'mylist-continue';
    if (path.startsWith('/detail/')) return 'DETAIL_PAGE';
    return 'home-trending';
  }, [location.pathname]);

  // Set focus when app mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setFocus(getDefaultFocusKey());
    }, 300);
    return () => clearTimeout(timer);
  }, [getDefaultFocusKey]);

  // Handle focus when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentFocus = getCurrentFocusKey();
      if (!currentFocus || currentFocus === 'APP_ROOT') {
        setFocus(getDefaultFocusKey());
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [location.pathname, getDefaultFocusKey]);

  // Global key handler for focus management and back button
  useEffect(() => {
    const handleKeyDown = (e) => {
      const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

      // Restore focus if lost when arrow key is pressed
      if (arrowKeys.includes(e.key)) {
        const currentFocus = getCurrentFocusKey();
        if (!currentFocus || currentFocus === 'APP_ROOT' || currentFocus === '') {
          e.preventDefault();
          setFocus(getDefaultFocusKey());
          return;
        }
      }

      // Handle back button
      const backKeys = ['Backspace', 'Escape', 'XF86Back', 'GoBack'];
      const backKeyCodes = [10009, 461, 27];

      if (backKeys.includes(e.key) || backKeyCodes.includes(e.keyCode)) {
        if (location.pathname.startsWith('/detail/')) {
          e.preventDefault();
          navigate(-1);
        }
      }

      // Handle TV remote color buttons
      switch (e.keyCode) {
        case 403: console.log('Red button'); break;
        case 404: console.log('Green button'); break;
        case 405: console.log('Yellow button'); break;
        case 406: console.log('Blue button'); break;
        default: break;
      }
    };

    // Prevent focus loss on click outside focusable elements
    const handleClick = (e) => {
      // Check if clicked element is focusable
      const isFocusable = e.target.closest('[data-focusable="true"]');
      if (!isFocusable) {
        // Restore focus after a brief delay
        setTimeout(() => {
          const currentFocus = getCurrentFocusKey();
          if (!currentFocus || currentFocus === 'APP_ROOT' || currentFocus === '') {
            setFocus(getDefaultFocusKey());
          }
        }, 100);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, [navigate, location.pathname, getDefaultFocusKey]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="app">
        <Navigation />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/tv-shows" element={<TVShowsPage />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>StreamFlix Demo - Smart TV Application</p>
          <p className="footer-hint">Use arrow keys to navigate, Enter/OK to select, ESC to go back</p>
        </footer>
      </div>
    </FocusContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
