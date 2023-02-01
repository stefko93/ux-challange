import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export default function ContactInfo({ id, name, phone, avatar }) {
  const { deleteContact, getContactById } = useContext(GlobalContext);

  return (
    <div className='card mb-2 bg-black text-light '>
      <div className='container-fluid '>
        <div className='row g-0 justify-content-center align-items-center ps-2'>
          <div className='col-md-1'>
            <img
              src={avatar ? avatar : 'images/Default.png'}
              className='rounded-circle col-md-9'
              alt='Default'
            />
          </div>
          <div className='col-md-7'>
            <h1>{name}</h1>
            <p>{phone}</p>
          </div>
          <div className='col-md-1 d-flex justify-content-center align-items-center pe-2'>
            <h3>
              <i className='bi bi-bell-slash'></i>
            </h3>
          </div>
          <div className='col-md-1 d-flex justify-content-center align-items-center pe-2'>
            <h3>
              <i className='bi bi-headphones '></i>
            </h3>
          </div>

          <div className='btn-group col-md-1 d-flex justify-content-center align-items-center pe-2'>
            <button
              type='button'
              className='btn btn-secondary dropdown-toggle'
              data-bs-toggle='dropdown'
              data-bs-display='static'
              aria-expanded='false'
            >
              <i className='bi bi-three-dots'></i>
            </button>
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-dark dropdown-menu-lg-start'>
              <li>
                <Link
                  className='navbar-brand ms-3 '
                  data-bs-toggle='modal'
                  data-bs-target='#staticBack'
                  onClick={() => getContactById(id)}
                >
                  <i className='bi bi-gear-wide ms-2'>
                    <h7> Edit</h7>
                  </i>
                </Link>
              </li>
              <li>
                <button className='dropdown-item btn btn-sm ' type='button'>
                  <i className='bi bi-heart ms-2'>
                    <h7> Favourite</h7>
                  </i>
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item btn btn-sm'
                  type='button'
                  onClick={() => deleteContact(id)}
                >
                  <i className='bi bi-trash3 ms-2'>
                    <h7> Remove</h7>
                  </i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
