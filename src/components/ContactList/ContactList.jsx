import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styled'; // Importuj style z ContactList.styled.js

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ContactListWrapper>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          <ContactName>{contact.name}:</ContactName> <ContactNumber>{contact.number}</ContactNumber>
          <DeleteButton
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </ContactListItem>
      ))}
    </ContactListWrapper>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

