import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore } from "redux-persist";
import authReducer from '../reducers/auth.reducer';

const appReducer = combineReducers({
  auth: authReducer,
});
const persistConfig = {
  key: "main-root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer<ReturnType<typeof appReducer>>(
  persistConfig,
  appReducer
);
const rootReducer = (state: any, action: any) => {
  if (action.type === "auth/doLogoutAuth") {
    state = undefined;
  }
  return persistedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware :any)  =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;