import React, { useEffect, useState } from "react";

export default function ContactPage() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async() => {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/api/contacts`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        }
      );
      const data = await response.json();
      if(response.ok){
        setContacts(data.data)
      }
    }
    fetchContacts()
  }, [])
  return (<div>
    <div>
      {contacts && contacts.map((contact) => (
        <p key={contact.id} >{contact.name}</p>
      ))}
    </div>
  </div>);
}
