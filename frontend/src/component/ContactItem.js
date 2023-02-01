import React from 'react';
import ContactInfo from './ContactInfo';

export default function ContactItem({ contact }) {
  return (
    <div className='position-relative'>
      <ContactInfo
        className='position-absolute bottom-50 start-0'
        id={contact.id}
        name={contact.name}
        phone={contact.phone}
        avatar={contact.avatar}
      />
    </div>
  );
}
