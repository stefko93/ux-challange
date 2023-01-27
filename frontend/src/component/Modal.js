import React, { useState, useContext } from 'react';
import { saveContact, getContactById, editContact } from '../helpers/fetchFuncs';
import { useContactContext } from '../context/useContactContext';
import { GlobalContext } from '../context/GlobalState';

export default function Modal() {
  // const { dispatch } = useContactContext();
  const { addContact } = useContext(GlobalContext);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('profile.jpg');

  const contact = { name, phone, email, avatar};

  function handleSubmit(event) {
    event.preventDefault();
    
        addContact(contact);  
        setName('')
        setEmail('')
        setPhone('')
        setAvatar('')
        // dispatch({type: 'ADD_CONTACT', payload: response.result[0]})
      // if(state.mode === 'EDIT'){
      //   let response = await editContact(contact);
      //   dispatch({type: 'EDIT_CONTACT', payload: response})
      
    //}     
  };
  

  return (
    <div>
      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabindex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content bg-dark text-light'>
            <form className='form' onSubmit={handleSubmit}>
              <div className='modal-header'>
                <h5 className='modal-title' id='staticBackdropLabel'>
                  Add new contact
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                <div className='mb-3'>
                  <label for='name' className='form-label'>
                    Name
                  </label>
                  <input
                    className='form-control'
                    type='name'
                    id='name'
                    placeholder='John Doe'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div class='mb-3'>
                  <label for='phone' className='form-label'>
                    Phone
                  </label>
                  <input
                    className='form-control'
                    type='phone'
                    id='phone'
                    placeholder='+36 01 234 5678'
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className='mb-3'>
                  <label for='email' className='form-label'>
                    Email
                  </label>
                  <input
                    className='form-control'
                    type='email'
                    id='email'
                    placeholder='john@example.com'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                {/* {showError && <div className="btn btn-danger" >{errorMessage}</div>} */}
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='submit'
                  className='btn btn-primary'
                  data-bs-dismiss='modal'
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
