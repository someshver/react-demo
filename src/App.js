import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { init, useFocusable, FocusContext, setFocus } from '@noriginmedia/norigin-spatial-navigation';
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
  distanceCalculationMethod: 'center'
});

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const { ref, focusKey, focusSelf } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false
  });

  // Set focus when app mounts or route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      // Try to focus the first content card in the first row
      setFocus('home-trending');
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Refocus when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      focusSelf();
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname, focusSelf]);

  // Handle TV remote back button
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Handle various TV remote back button key codes
      // Samsung Tizen: 10009 (XF86Back)
      // LG webOS: 461 (GoBack)
      // Standard: Backspace, Escape
      const backKeys = ['Backspace', 'XF86Back', 'GoBack'];
      const backKeyCodes = [10009, 461];

      if (backKeys.includes(e.key) || backKeyCodes.includes(e.keyCode)) {
        // Only handle back on detail page
        if (location.pathname.startsWith('/detail/')) {
          e.preventDefault();
          navigate(-1);
        }
      }

      // Handle TV remote color buttons (optional features)
      switch (e.keyCode) {
        case 403: // Red button
          console.log('Red button pressed - Could show info');
          break;
        case 404: // Green button
          console.log('Green button pressed - Could add to list');
          break;
        case 405: // Yellow button
          console.log('Yellow button pressed - Could show search');
          break;
        case 406: // Blue button
          console.log('Blue button pressed - Could show settings');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location.pathname]);

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
          <p className="footer-hint">Use arrow keys to navigate, Enter/OK to select, Back to return</p>
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
