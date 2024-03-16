import React, { useState, useEffect } from 'react';

import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ]);
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    const contactsLocStorage = localStorage.getItem('contacts');
    if (contactsLocStorage) {
      setContacts(JSON.parse(contactsLocStorage));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const existingContact = contacts.find((c) => c.name.toLowerCase() === contact.name.toLowerCase());
  
    if (existingContact) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, contact]);
  };

  const filterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.number.toLowerCase().includes(filter)
  );

  const removeContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div style={{marginLeft: '40px'}}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter value={filter} onChange={filterChange}></Filter>
      <ContactList contacts={filteredContacts} removeContact={removeContact} />
    </div>
  );
}