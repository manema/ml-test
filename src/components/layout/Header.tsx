import React from 'react';
import SearchBar from '@components/SearchBar';

import '@styles/header.scss';

const Header = () => (
    <header className="header-container">
      <div className="header-content">
        <img src="cart.svg" alt="logo" className="header-icon" />
        <SearchBar />
      </div>
    </header>
  );

export default Header;
