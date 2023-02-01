import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Modal() {
  const { contact, addContact } = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [createObjectURL, setCreateObjectURL] = useState(`/images/Default.png`);

  const handleUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const im = event.target.files[0];
      setAvatar(im.name);
      setCreateObjectURL(URL.createObjectURL(im));
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleRemoveImage = () => {
    setCreateObjectURL(`/images/Default.png`);
    setAvatar(null);
  };

  useEffect(() => {
    setAvatar(document.getElementById('input-file'));
  }, [contact]);

  const body = { name, phone, email, avatar };
  function handleSubmit(event) {
    event.preventDefault();

    addContact(body);
    setName('');
    setEmail('');
    setPhone('');
    setAvatar('');
  }

  return (
    <div>
      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content bg-dark text-light'>
            <form className='form' onSubmit={handleSubmit}>
              <div className='modal-header '>
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
                <div className='card text-center bg-dark text-light'>
                  <div className='row g-0'>
                    <img
                      src={`${createObjectURL}`}
                      className='rounded-circle col-md-4 text-start pe-3'
                      accept='image/*'
                      alt='Default'
                    />

                    <div className='col-md-7 align-self-center'>
                      <label htmlFor='input-file' className='form-label'>
                        Add picture:
                      </label>
                      <input
                        className='form-control bg-dark text-light'
                        type='file'
                        id='input-file'
                        onClick={handleUpload}
                      />
                    </div>
                    <h1
                      className='btn btn-sm btn-outline-light col-md-1 align-self-center bg-dark text-light'
                      type='button'
                    >
                      <i
                        className='bi bi-trash3'
                        onClick={handleRemoveImage}
                      ></i>
                    </h1>
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Name
                  </label>
                  <input
                    className='form-control bg-dark text-light'
                    type='name'
                    id='name'
                    placeholder='John Doe'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className='mb-3 '>
                  <label htmlFor='phone' className='form-label '>
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
                  <label htmlFor='email' className='form-label'>
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
