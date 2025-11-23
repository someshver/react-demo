import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { init, useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import MyListPage from './pages/MyListPage';

// Initialize spatial navigation
init({
  debug: false,
  visualDebug: false
});

function AppContent() {
  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    autoRestoreFocus: true
  });

  useEffect(() => {
    // Focus the first element when app mounts
    const timer = setTimeout(() => {
      const firstFocusable = document.querySelector('[data-focusable="true"]');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
          </Routes>
        </main>

        <footer className="app-footer">
          <p>StreamFlix Demo - Built with React and Spatial Navigation</p>
          <p className="footer-hint">Use arrow keys to navigate, Enter to select</p>
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
