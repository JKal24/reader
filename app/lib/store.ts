import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducer from './state/user';

const rootReducer = combineReducers({
    userReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({immutableCheck: false, serializableCheck: false})
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;