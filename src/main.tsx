// import React from 'react';import{createRoot}from'react-dom/client';import App from './App';import './styles.css';createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);



import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// @ts-ignore CSS side-effect imports are handled by the bundler.
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
