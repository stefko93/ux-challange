import React from 'react';
import ContactItem from './ContactItem';

export default function ContactList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts &&
          contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
      </ul>
    </div>
  );
}
