import React from 'react';
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from '@pages/App';

hydrateRoot(document, 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);