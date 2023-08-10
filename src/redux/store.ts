import { configureStore } from '@reduxjs/toolkit';

import conversationsReducer from './slices/conversationsSlice';
import authReducer from './slices/authSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
    auth: authReducer,
    users: usersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
