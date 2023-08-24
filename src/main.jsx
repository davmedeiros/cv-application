import React from 'react';
import ReactDOM from 'react-dom/client';
import Personal from './components/Personal';
import Education from './components/Education';
import Work from './components/Work';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <Personal />
      <Education />
      <Work />
    </main>
  </React.StrictMode>
);
