## Setting Absolute Import

- in **tsconfig.json**, add

```
    {
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "src/*": ["./src/*"]
        }
      }
    }
```

- in **vite.config.ts**,

```
    {
      resolve: {
        alias: {
            src: path.resolve('./src'),
        }
      },
      // ...
    }
```

- The absolute import will looks like

```
    import Test from 'components/test'
```

## Install and Config Tailwind and Sass

- Install and init tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Config in **tailwind.config.js**

````
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}```
````

- import tailwind base, component, and utility to **global.scss**

```
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

```

- import **global.scss** to the root fo the project (**main.tsx**)

## Configure RTK Query

- Install RTK Query and redux-persist, also the type

```
  npm install @reduxjs/toolkit react-redux
  npm install redux-persist
  npm install @types/redux-persist

```

- Configure redux store, and redux persist in **stores/index.ts**

```
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from 'src/stores/services';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedStore = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedStore,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const persist = persistStore(store);

```

- Wrap up the component with Provider in **main.tsx**

```
import { Provider } from 'react-redux';
import store, { persist } from 'src/stores';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

```

## Configure React Router Dom v6

- Install react-router-dom

```
npm install react-router-dom
```

- Create **routers/index.tsx** and fill with this code

```
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (fill with component of pages. Ex: <Login/>)
  },
]);

export default router;

```

- Change <App/> in main.tsx with <RouterProvider />, and import the created router from **routers/index.tsx**

```
import router from 'src/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

```

## Configure Framer Motion

- Install framer-motion

```
npm install framer-motion
```

- Wrap up the component with Provider in **main.tsx**

```
import { AnimatePresence } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimatePresence mode="wait" initial={false}>
      <App/>
    </AnimatePresence>
  </React.StrictMode>
);

```
