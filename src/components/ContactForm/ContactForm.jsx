import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormWrapper, Label, Input, Button } from './ContactForm.styled';

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(formData.name, formData.number);
    setFormData({ name: '', number: '' });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </FormWrapper>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
