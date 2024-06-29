import express, { Request, Response } from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import App from '../components/App';

const app = express();

app.use(express.static('dist'));

app.get('*', (req: Request, res: Response) => {

  const { pipe } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
  </StaticRouter>
  , {
    bootstrapScripts: ['/main.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
