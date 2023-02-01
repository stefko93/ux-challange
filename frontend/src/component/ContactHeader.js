import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactHeader() {
  return (
    <>
      <div className='card mb-2 bg-black text-light '>
        <div className='row g-0'>
          <ul className='nav mb-4 justify-content-end align-self-center'>
            <Link className='col-md-5 ms-7 mt-3 px-5' to='/'>
              <i className='bi bi-arrow-left-square'> Back</i>
            </Link>
            <li className='col-md-1 ms-2 mt-3 px-5 '>
              <i className='bi bi-gear-wide'></i>
            </li>
            <li className='col-md-1 ms-2 mt-3 px-5'>
              <i className='bi bi-person'></i>
            </li>
            <li className='col-md-1m ms-2 mt-3 px-3'>
              <i
                className='bi bi-plus-circle'
                data-bs-toggle='modal'
                data-bs-target='#staticBackdrop'
              ></i>
              <button
                className='bg-black text-light'
                data-bs-toggle='modal'
                data-bs-target='#staticBackdrop'
              >
                Add new
              </button>
            </li>
            <li className='col-md-2 ms-5 mt-3'>
              <i className='bi bi-lightbulb'></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
