import React from 'react';
import ContactInfo from './ContactInfo';

export default function ContactItem({ contact }) {
  return (
    <>
        <ContactInfo name={contact.name} phone={contact.phone} avatar={contact.avatar} />
        <div>
            <button>icon1</button>
            <button>icon2</button>
            <button>icon3</button>
        </div>
    </>
  );
}
