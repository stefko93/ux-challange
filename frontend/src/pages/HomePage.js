import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div className='container text-center mt-5 pt-5 bg-dark text-light'>
        <h1 className='mb-5'>Contact application</h1>
        <h5 className='mb-5'>Here you can manage all your contacts...</h5>
        <p className='mb-3'>Your contacts here:</p>
        <Link to='/contacts'>
          <button type='button' className='btn btn-light'>
            Contacts
          </button>
        </Link>
      </div>
      <div className='fixed-bottom text-center pb-3 bg-light'>
        <img
          src='images/Uxstudio-green-black_1.svg'
          className='uxstudio mt-3'
          alt='uxstudio'
        ></img>
      </div>
    </>
  );
}
