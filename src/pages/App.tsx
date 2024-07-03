import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import ItemsList from '@pages/ItemsList'
import ItemDetail from '@pages/ItemDetail';
import Layout from '@components/layout';


import '@styles/main.scss';
import { ItemResult, ItemType } from '@constants/index';

const App = ({ data, title } : { data?: unknown, title?: string }) => (
    <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/main.css"></link>
      <title>{title || 'Mercado'}</title>
    </head>
    <body id="#root">
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/items/:id" element={<ItemDetail data={data as ItemResult} />} />
          <Route path="/items" element={<ItemsList data={data as ItemType[]} />} />
        </Route>
      </Routes>
    </body>
  </html>
  );

export default App;
