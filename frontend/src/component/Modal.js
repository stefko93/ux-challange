import React, { useState } from 'react';

export default function Modal() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showErrorMessage = (message) => {
    setErrorMessage(message);
    setShowError(true);
  };

  const isInputValid = () => {
    if (name === '' && phone === '' && email === '' && avatar === '') {
      showErrorMessage('All the input fields are required.');
      return false;
    }
    return true;
  };

  const contact = {name, phone, email, avatar}

  const addNewContact = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      console.log(data);
      if (data.status !== 200) {
        showErrorMessage(data.message);
        return;
      }
    } catch (err) {
      showErrorMessage('Service unavailable, please try again later.');
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isInputValid()) {
      return;
    }
    addNewContact();
  };


  return (
    <div>
      <div
        class='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabindex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <form className='form' onSubmit={handleSubmit}>
              <div class='modal-header'>
                <h5 class='modal-title' id='staticBackdropLabel'>
                  Add new contact
                </h5>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
                <input
                  type='name'
                  id='name'
                  placeholder='John Doe'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <input
                  type='phone'
                  id='phone'
                  placeholder='+36 01 234 5678'
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <input
                  type='email'
                  id='email'
                  placeholder='john@example.com'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button type='submit' class='btn btn-primary'>
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
