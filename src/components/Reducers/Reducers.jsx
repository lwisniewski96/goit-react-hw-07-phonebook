import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  setFilter,
  showAlert,
  hideAlert,
} from '../Actions/Actions';

const initialState = {
  contacts: [],
  filter: '',
  showAlert: false,
  alertText: '',
};

const contactsReducer = createReducer(initialState.contacts, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(setFilter, (state, action) => action.payload);
});

const alertReducer = createReducer(initialState.showAlert, builder => {
  builder
    .addCase(showAlert, (state, action) => true)
    .addCase(hideAlert, (state, action) => false);
});

const alertTextReducer = createReducer(initialState.alertText, builder => {
  builder
    .addCase(showAlert, (state, action) => action.payload)
    .addCase(hideAlert, (state, action) => '');
});

export { contactsReducer, filterReducer, alertReducer, alertTextReducer };
