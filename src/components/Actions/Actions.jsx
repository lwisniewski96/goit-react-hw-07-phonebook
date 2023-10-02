import { createAction } from '@reduxjs/toolkit';

// Akcje do zarządzania kontaktami
export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('contacts/setFilter');

// Akcja do obsługi alertów
export const showAlert = createAction('app/showAlert');
export const hideAlert = createAction('app/hideAlert');
