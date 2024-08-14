import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './stylescss/Header.scss';
import './stylescss/Sidebar.scss';
import './stylescss/All-Task.scss';
import './stylescss/New-Task.scss';
import './stylescss/Doing-Task.scss';
import './stylescss/Done-Task.scss';
import './stylescss/Create-Task.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
