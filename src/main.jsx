import React from 'react';
import ReactDOM from 'react-dom/client';
import Personal from './components/Person';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Personal name="John Doe" email="johndoe@email.com" phone="555-555-5555" />
  </React.StrictMode>
);
