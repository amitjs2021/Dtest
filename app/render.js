import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HTML from './index';
import HCard from './hcard';
import { find } from './db';


export default (req, res) => (
  Promise.resolve().then(() => (
     req.cookies.user ? find(req.cookies.user) : Promise.resolve({})
  ))
  .then(state => {
    const content = ReactDOMServer.renderToStaticMarkup(
      <HTML universalState={state}>
        <HCard {...state}/>
      </HTML>
    );
    res.write(content);
    res.end();
  })
  .catch(() => {
    res.end();
  })
)