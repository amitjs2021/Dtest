import React from 'react';
import HTMLDocument from 'react-html-document';

export default ({ children, ...props }) => (
  <HTMLDocument
    title="VCard-test"
    scripts={['/app.js']}
    stylesheets={['/css/bootstrap.min.css', '/css/main.css']}
    metatags={[
      { charSet: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]}
    {...props}
  >
    {children}
  </HTMLDocument>
);
