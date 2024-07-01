import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Items from './Items';
import Layout from './layout';

const App: React.FC = () => {
  return (

    <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/main.css"></link>
      <title>Mercado</title>
    </head>
    <body>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
        </Route>
      </Routes>
    </body>
  </html>
  );
};

export default App;
