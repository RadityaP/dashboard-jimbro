import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from 'src/App';

// Styles
import 'src/styles/global.scss';

// Import Redux
import { Provider } from 'react-redux';
import store, { persist } from 'src/stores';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
