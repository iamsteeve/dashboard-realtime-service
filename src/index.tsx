import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Index from './pages/Index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
