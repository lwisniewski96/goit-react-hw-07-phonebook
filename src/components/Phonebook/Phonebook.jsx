import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import {
  addContact,
  deleteContact,
  setFilter,
  showAlert,
  hideAlert,
} from '../Actions/Actions';



function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const isAlertShown = useSelector(state => state.showAlert); // Zmiana nazwy na isAlertShown
  const alertText = useSelector(state => state.alertText);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(addContact(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = event => {
    const filter = event.target.value.toLowerCase();
    dispatch(setFilter(filter));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleAddContact = (name, number) => {
    if (!name.trim() || !number.trim()) {
      return;
    }

    const isContactExists = contacts.some(
      contact =>
        contact &&
        contact.name &&
        contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      dispatch(showAlert(`Contact "${name}" is already in contacts.`));
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    dispatch(hideAlert());
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Add New Contact</h2>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>

      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={contacts.filter(
          contact =>
            contact &&
            contact.name &&
            contact.name.toLowerCase().includes(filter)
        )}
        onDeleteContact={handleDeleteContact}
      />

      {isAlertShown && ( // Zmiana na isAlertShown
        <div className="alert">
          <p>{alertText}</p>
          <button onClick={() => dispatch(hideAlert())}>OK</button>
        </div>
      )}
    </div>
  );
}

export default Phonebook;
