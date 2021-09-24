import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import HTMLDocument from 'react-html-document';

import HCard from './hcard';
import { find } from './db';


export default (req, res) => (
  find(req.cookies.user)
    .then(state => {
      const content = renderToString(
        <HTMLDocument
          title="VCard-test"
          scripts={['/app.js']}
          stylesheets={['/css/bootstrap.min.css', '/css/main.css']}
          universalState={state}
        >
          <HCard {...state} />
        </HTMLDocument>
      );
      res.write(content);
      res.end();
    })
    .catch(() => {
      res.end();
    })
)