import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import { PrismicProvider } from '@prismicio/react';
import { client } from './prismic';

ReactDOM.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <Router>
        <App />
      </Router>
    </PrismicProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
