import React, { useState, useNavigate } from 'react';

export default function AddContentModal() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

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

  const contact = { name, phone, email, avatar };

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
      if (data.status !== 200) {
        showErrorMessage(data.message);
        return;
      }
      navigate('/contact', { replace: true });
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
    <div className='modal-dialog modal-dialog-centered'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <form className='form' onSubmit={handleSubmit}>
            <div class='modal-header'>
              <h5 className='modal-title' id='staticBackdropLabel'>
                Add contact:
              </h5>
              <button
                type='button'
                className='btn-close'
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
            <div className='modal-footer'>
              <button type='submit' data-bs-dismiss='modal'>
                Add
              </button>
            </div>
            {showError && <div>{errorMessage}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
