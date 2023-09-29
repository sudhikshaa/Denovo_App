/** @format */

// /** @format */
// import { configureStore } from '@reduxjs/toolkit';

// const initialState = {
// 	denovo: {
// 		productData: [],
// 	},
// };

// const store = configureStore({
// 	reducer: {},
// 	preloadedState: initialState,
// });

// export default store;
// In your store configuration file (e.g., store.js)
// store.js
import { configureStore } from '@reduxjs/toolkit';
import denovoReducer from './denovoSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, denovoReducer);
export const store = configureStore({
	reducer: { denovo: persistedReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);
