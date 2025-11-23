import React from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useNavigate, useLocation } from 'react-router-dom';

function NavItem({ path, label, onFocus, focusKey }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      navigate(path);
    },
    onFocus,
    isFocusBoundary: false,
    focusKey
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
    isFocusBoundary: false,
    focusKey: 'NAVIGATION'
  });

  return (
    <header className="app-header">
      <div className="logo">StreamFlix</div>
      <nav ref={ref} className="nav-menu">
        <NavItem path="/" label="Home" focusKey="NAV_HOME" />
        <NavItem path="/movies" label="Movies" focusKey="NAV_MOVIES" />
        <NavItem path="/tv-shows" label="TV Shows" focusKey="NAV_TVSHOWS" />
        <NavItem path="/my-list" label="My List" focusKey="NAV_MYLIST" />
      </nav>
      <div className="user-section">
        <span className="search-icon">Search</span>
        <span className="profile">Profile</span>
      </div>
    </header>
  );
}

export default Navigation;
