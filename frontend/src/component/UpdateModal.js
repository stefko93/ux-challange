import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function UpdateModal({ contact }) {
  const { updateContact } = useContext(GlobalContext);

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);
  const [avatar, setAvatar] = useState(`images/${contact.avatar}`);

  const fileHandler = (event) => {
    setAvatar(event.target.files[0].name);
  };

  const body = {
    id: contact.id,
    name,
    phone,
    email,
    avatar,
  };

  function handleSubmit(event) {
    event.preventDefault();

    updateContact(body);
    setName('');
    setEmail('');
    setPhone('');
    setAvatar('');
  }

  return (
    <div>
      <div
        className='modal fade'
        id='staticBack'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabindex='-1'
        aria-labelledby='staticBackLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content bg-dark text-light'>
            <form className='form' onSubmit={handleSubmit}>
              <div className='modal-header'>
                <h5 className='modal-title' id='staticBackdropLabel'>
                  Edit contact
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                <div class='card text-center bg-dark text-light'>
                  <div className='row g-0'>
                    <img
                      src={avatar ? avatar.name : 'images/Default.png'}
                      class='rounded-circle col-md-4 text-start pe-3'
                      alt='Default'
                    />
                    <div className='col-md-7 align-self-center '>
                      <input
                        class='form-control bg-dark text-light'
                        type='file'
                        id='formFile'
                        onChange={fileHandler}
                      />
                    </div>
                    <h1
                      class='btn btn-sm col-md-1 align-self-center bg-dark text-light'
                      type='button'
                    >
                      <i class='bi bi-trash3'></i>
                    </h1>
                  </div>
                </div>
                <div className='mb-3'>
                  <label for='name' className='form-label'>
                    Name
                  </label>
                  <input
                    className='form-control bg-dark text-light'
                    type='name'
                    id='name'
                    placeholder='John Doe'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class='mb-3'>
                  <label for='phone' className='form-label '>
                    Phone
                  </label>
                  <input
                    className='form-control bg-dark text-light'
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
                    className='form-control bg-dark text-light'
                    type='email'
                    id='email'
                    placeholder='john@example.com'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
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
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
