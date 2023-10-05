import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {NewsAppProvider} from './components/organisms/context/NewsAppProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewsAppProvider>
      {/* <Router>
        <HeaderNavigationMenu title={'React News App'} />
      </Router> */}
      <App />
    </NewsAppProvider>
  </React.StrictMode>
);
