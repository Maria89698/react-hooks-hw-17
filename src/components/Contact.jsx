import React from 'react';

export function Contact({contact, removeContact }) {
  const handleRemoveContact = (id) => {
    removeContact(id);
  };

  return (
    <li style={{marginBottom: '10px'}} key={contact.id}>
        {contact.name} - {contact.number}
        <button style={{marginLeft: '10px'}} onClick={() => handleRemoveContact(contact.id)}>Delete</button>
    </li>
  );
}