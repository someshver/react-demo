import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import { useNavigate, useLocation } from 'react-router-dom';

function NavItem({ path, label, onFocus }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      navigate(path);
    },
    onFocus
  });

  return (
    <span
      ref={ref}
      className={`nav-item ${isActive ? 'active' : ''} ${focused ? 'focused' : ''}`}
      onClick={() => navigate(path)}
      tabIndex={0}
    >
      {label}
    </span>
  );
}

function Navigation() {
  const { ref, focusKey } = useFocusable({
    focusable: false,
    saveLastFocusedChild: true,
    trackChildren: true,
    focusKey: 'NAVIGATION'
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <header className="app-header">
        <div className="logo">StreamFlix</div>
        <nav ref={ref} className="nav-menu">
          <NavItem path="/" label="Home" />
          <NavItem path="/movies" label="Movies" />
          <NavItem path="/tv-shows" label="TV Shows" />
          <NavItem path="/my-list" label="My List" />
        </nav>
        <div className="user-section">
          <span className="search-icon">Search</span>
          <span className="profile">Profile</span>
        </div>
      </header>
    </FocusContext.Provider>
  );
}

export default Navigation;
