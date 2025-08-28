import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GridView from './GridView/Components/GridView.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='grid-wrapper'>
      <GridView />
    </div>
  </React.StrictMode>
);

reportWebVitals();
