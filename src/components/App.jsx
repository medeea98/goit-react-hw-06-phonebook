import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, setFilter, deleteContact } from 'contactSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const handleFilterChange = (filterValue) => {
    dispatch(setFilter(filterValue));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact => {
      return typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase())
    }
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};


