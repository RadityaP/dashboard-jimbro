import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import 'src/styles/global.scss';

// Import Redux
import { Provider } from 'react-redux';
import store, { persist } from 'src/stores';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import router from 'src/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
