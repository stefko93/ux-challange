import React, { useEffect, useContext } from 'react';
import ContactHeader from '../component/ContactHeader';
import ContactList from '../component/ContactList';
import Modal from '../component/Modal';
import { useContactContext } from '../context/useContactContext';
import {GlobalContext} from '../context/GlobalState'
import { contactsReducer } from '../context/contactContext';

export default function ContactPage() {
  // const { contacts, dispatch } =  useContactContext()
  const {
    dispatch,
    contacts,
    getContacts
  } = useContext(GlobalContext);

  useEffect(() => {
    // const fetchContacts = async () => {
    //   const response = await fetch(
    //     `${process.env.REACT_APP_URL}/api/contacts`,
    //     {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   if (response.ok) {
    //     dispatch({type: 'GET_CONTACTS', payload: data.results})
    //   }
    // };
    // fetchContacts();

    getContacts()
  }, [dispatch]);
  console.log('page',contacts)

  return (
    <div className='container mt-5 bg-dark text-light'>
      <div className='container mt-5 '>
        <ContactHeader />
      </div>
      <div className='container mt-5 bg-dark text-light'>
        <ContactList contacts={contacts} />
      </div>
      <div className='container mt-5 bg-dark text-light'>
        <Modal />
      </div>
    </div>
  );
}
