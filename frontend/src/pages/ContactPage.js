import React, { useEffect, useState } from "react";
import AddContentModal from "../component/AddContentModal";
import ContactHeader from "../component/ContactHeader";
import ContactList from "../component/ContactList";
import Modal  from "../component/Modal";

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

  return (
    <div className="container mt-5 ">
      <div className="container mt-5">
        <ContactHeader />
      </div>
      <div className="container mt-5">
        <ContactList contacts={contacts} />
      </div>
      <div>
        <Modal />
      </div>
    </div>);
}
