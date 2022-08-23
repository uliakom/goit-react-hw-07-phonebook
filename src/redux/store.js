import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './contactsSlice';
import { contactApi } from './api';



export const store = configureStore({
    reducer: {
    contacts: phoneBookSlice.reducer,
      [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware), 
})

