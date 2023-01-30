import React, { createContext, useReducer } from 'react';
//import { ContactContext, contactsReducer } from './contactContext';
import AppReducer from './AppReducer';

const initialState = {
    contacts: [],
    contact: {}
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getContacts() {
        const config = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch(
            `${process.env.REACT_APP_URL}/api/contacts`, config
          ).then(response => response.json());
            console.log(res)
          dispatch({
            type: 'GET_CONTACTS',
            payload: res,
          });
        } catch (err) {
          console.error(err)
        }
      }
      async function addContact(contact) {
        const config = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        };
    
        try {
          const res = await fetch(`${process.env.REACT_APP_URL}/api/contact`, config);
          const body = await res.json();
          dispatch({
            type: 'ADD_CONTACT',
            payload: body,
          });
        } catch (err) {
          console.error(err)
        }
      }

      async function getContactById(id) {
        const config = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch(
            `${process.env.REACT_APP_URL}/api/contact/${id}`,
            config
          );
          const body = await res.json();
          dispatch({
            type: 'GET_CONTACT',
            payload: body,
          });
        } catch (err) {
          console.error(err)
        }
      }

      async function updateContact(contact) {
        const config = {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        };
        try {
          const res = await fetch(
            `${process.env.REACT_APP_URL}/api/contacts/${contact.id}`,
            config
          );
          const body = await res.json();
            console.log(body)
          dispatch({
            type: 'UPDATE_CONTACT',
            payload: body,
          });
        } catch (err) {
          console.error(err)
        }
      }

      async function deleteContact(id) {
        const config = {
          method: 'DELETE',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch(`${process.env.REACT_APP_URL}/api/contact/${id}`, config);
          const response =  await res.json();
          dispatch({
            type: 'DELETE_CONTACT',
            payload: response,
          });
        } catch (err) {
          console.error(err)
        }
      }
    
      return (
        <GlobalContext.Provider
          value={{
            contacts: state.contacts,
            contact: state.contact,
            getContacts,
            addContact,
            getContactById,
            updateContact,
            deleteContact,
            dispatch
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
}