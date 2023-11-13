import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './App';

import '../static/styles.scss';

render(
  <StrictMode><App /></StrictMode>, document.getElementById('root'),
);

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development' && module.hot) module.hot.accept();
