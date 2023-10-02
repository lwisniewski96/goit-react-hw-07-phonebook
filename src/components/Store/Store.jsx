import { configureStore } from '@reduxjs/toolkit';
import {
  contactsReducer,
  filterReducer,
  alertReducer,
  alertTextReducer,
} from '../Reducers/Reducers';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    showAlert: alertReducer,
    alertText: alertTextReducer,
  },
});

export default store;
