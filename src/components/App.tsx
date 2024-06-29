import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Items from './Items';
import Layout from './layout';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
        </Route>
      </Routes>
  );
};

export default App;
