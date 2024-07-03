
import apiRouter from './apiRouter';
import express, { Request, Response } from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import App from '../pages/App';
import { getPageTitle, isGoogleCrawler, loadDataHandler, shouldWaitForData } from '@utils/index';

const app = express();

export const ssrHandler = async (req: Request, res: Response) => {

  const isCrawler = isGoogleCrawler(req);

  let response;
  let title;
  if (shouldWaitForData(req.route.path)) {
    response = await loadDataHandler(req);
  }
  title = getPageTitle({ params: { data: response?.data, ...req.params, ...req.query  }, path: req.route.path})

  const { pipe } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App data={response?.data} title={title} />
    </StaticRouter>
  , {
    bootstrapScripts: ['/main.js'],
    onShellReady() {
      if(!isCrawler) {
        res.setHeader('content-type', 'text/html');
        pipe(res);
      }
    },
    onAllReady() {
      if(isCrawler) {
        res.setHeader('content-type', 'text/html');
        pipe(res);
      }
    }
  });
}

// static assets
app.use(express.static('dist'));
app.use(express.static('public'));

//handlers
app.use('/api', apiRouter);
app.get('/items/:id', ssrHandler);
app.get('/items', ssrHandler);
app.get('*', ssrHandler);



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
