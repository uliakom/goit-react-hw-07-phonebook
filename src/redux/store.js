import { configureStore } from '@reduxjs/toolkit';
import {phoneBookSlice} from './contactsSlice';



export const store = configureStore({
    reducer: {
        contacts: phoneBookSlice.reducer,
    },
    
})

