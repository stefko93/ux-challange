import React, { useEffect, useContext } from 'react';
import ContactHeader from '../component/ContactHeader';
import ContactList from '../component/ContactList';
import Modal from '../component/Modal';
import UpdateModal from '../component/UpdateModal';
import {GlobalContext} from '../context/GlobalState'

export default function ContactPage() {
  const {
    dispatch,
    contact,
    contacts,
    getContacts,
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()
  }, [dispatch]);

  return (
    <div className='bg-dark text-light'>
      <div>
        <ContactHeader />
      </div>
      <div className='container mt-5 bg-dark text-light'>
        <ContactList contacts={contacts} />
      </div>
      <div className='container mt-5 bg-dark text-light'>
        <Modal />
        {contact && <UpdateModal contact={contact} />}
      </div>
    </div>
  );
}
