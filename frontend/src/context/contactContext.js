import {createContext, useReducer} from 'react';

const initialState = {
    contacts: []
}

export const ContactContext = createContext(initialState);

export const contactsReducer = (state, action) => {
    switch(action.type){
        case 'GET_CONTACTS': {
            return {
                ...state,
                contacts: action.payload
            };
        }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [ ...state.contacts, action.payload],
                mode: 'ADD'
            };
        case 'EDIT_CONTACT': {
            return {
                ...state,
                contacts: state.contacts.map((contact) => {
                    if(contact.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return contact;
                    }
                }),
                mode: 'EDIT'
            };
        }
        case 'DELETE_CONTACT': {
            console.log("action-payload",action.payload)
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload.id),
                mode: 'DELETE'
            };
        }
        default:
            return state;
        }
}

export const ContactContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactsReducer, {
        initialState
    });

    return (
        <ContactContext.Provider value={{...state, dispatch}}>
            {children}
        </ContactContext.Provider>
    )
} 