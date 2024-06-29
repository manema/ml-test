import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = () => (
    <>
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );

export default Layout;
