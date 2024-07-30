import { configureStore } from "@reduxjs/toolkit";

import formulaireSlice from "./slices/formulaire/formulaireSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//////////////////////////////////
// SETUP ROOT-REDUCER & PERSIST //
//////////////////////////////////
const persistConfig = {
   key: "root",
   storage,
   version: 1,
};
const rootReducer = combineReducers({
   formulaire: formulaireSlice,
});

///////////////////////////////////////
// SETUP STORE & PERSISTOR + EXPORTS //
///////////////////////////////////////

// PERSIST REDUCER
const persistedReducer = persistReducer(persistConfig, rootReducer);

// EXPORTS : store & persistor
export const store = configureStore({
   reducer: persistedReducer,
   // REMOVE DEFAULT ERROR CHECKER :
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});
export const persistor = persistStore(store);
