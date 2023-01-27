import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { useContactContext } from '../context/useContactContext';
import { deleteContactById } from '../helpers/fetchFuncs';
import { GlobalContext } from '../context/GlobalState';

export default function ContactInfo({ id, name, phone, avatar }) {
  const { deleteContact, getContactById } = useContext(GlobalContext);
  // const handleEdit = async (id) => {
  //   console.log(state)
  //   dispatch({type:'EDIT_CONTACT', payload: id})
  // };

  // const handleDelete = async (id) => {
  //   const response = await deleteContactById(id);
  //   dispatch({ type: 'DELETE_CONTACT', payload: response.result[0] });
  // };

  return (
    <div className='card mb-3 bg-black '>
      <div class='row g-0 justify-content-center align-items-center ps-2'>
        <div class='col-md-1 '>
          <div>{avatar}</div>
        </div>

        <div class='col-md-8'>
          <h1>{name}</h1>
          <p>{phone}</p>
        </div>

        <div class='col-md-1 d-flex justify-content-center align-items-center pe-2'>
          <h3 className=''>
            <i class='bi bi-mic-mute'></i>
          </h3>
        </div>
        <div class='col-md-1 d-flex justify-content-center align-items-center pe-2'>
          <h3 className=''>
            <i class='bi bi-telephone-inbound '></i>
          </h3>
        </div>

        <div class='btn-group col-md-1 d-flex justify-content-center align-items-center pe-2'>
          <button
            type='button'
            class='btn btn-secondary dropdown-toggle'
            data-bs-toggle='dropdown'
            data-bs-display='static'
            aria-expanded='false'
          >
            <i class='bi bi-three-dots'></i>
          </button>
          <ul class='dropdown-menu dropdown-menu-end dropdown-menu-dark dropdown-menu-lg-start'>
            <li>
              <Link
                class='navbar-brand ms-3'
                data-bs-toggle='modal'
                data-bs-target='#staticBackdrop'
                onClick={() => getContactById(id)}
              >
                <i class='bi bi-pencil ms-5'></i>
              </Link>
            </li>
            <li>
              <button class='dropdown-item btn btn-sm' type='button'>
                <i class='bi bi-star ms-5'></i>
              </button>
            </li>
            <li>
              <button
                class='dropdown-item btn btn-sm'
                type='button'
                onClick={() => deleteContact(id)}
              >
                <i class='bi bi-trash3 ms-5'></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
