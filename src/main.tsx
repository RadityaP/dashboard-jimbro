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
import { AnimatePresence } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <AnimatePresence mode="wait" initial={false}>
          <RouterProvider router={router} />
        </AnimatePresence>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
