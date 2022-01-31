import React from 'react';
import { render } from 'react-dom';
import ConnectedApp from './App';

import '../static/styles.scss';

render(
  <React.StrictMode><ConnectedApp /></React.StrictMode>, document.getElementById('root'),
);

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development' && module.hot) module.hot.accept();
