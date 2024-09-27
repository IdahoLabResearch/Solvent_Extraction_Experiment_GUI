{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// Import Redux and Store
import { Provider } from 'react-redux';
import { store } from './app/store/index';

// Import Fonts
import '@fontsource/source-sans-pro';

// Import App
import App from './App'

// Styles
import './styles/App.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
