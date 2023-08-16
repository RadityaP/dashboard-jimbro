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
