import React from 'react';
import SearchBar from '@components/SearchBar';

import '@styles/header.scss';
import { Link } from 'react-router-dom';
import { routes } from '@constants/index';

const Header = () => (
    <header className="header-container">
      <div className="header-content">
        <Link to={routes.home}><img src="/cart.svg" alt="logo" className="header-icon" /></Link>
        <SearchBar />
      </div>
    </header>
  );

export default Header;
