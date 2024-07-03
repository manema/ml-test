import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

import '@styles/layout.scss';

const Layout = () => (
    <>
      <Header />
      <div className="layout-content-wrapper">
        <main className='layout-content'>
          <Outlet />
        </main>
      </div>
    </>
  );

export default Layout;
