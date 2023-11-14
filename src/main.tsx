import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import '../static/styles.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

const renderMain = (): void => {
  root.render(
    <StrictMode>
     <App />
    </StrictMode>,
  );
};

renderMain();
