import React from 'react';
import {Link} from 'react-router-dom';

export default function ContactHeader() {
  return (
    <>
      <div class='card mb-2 bg-black text-light '>
          <div class='row g-0'>
            {/* <i class='btn bi bi-arrow-left-square'> Back</i> */}
            {/* <img src="../assets/icons/BackArrow.svg" alt="icon" width="30" height="24" className="d-inline-block align-text-top" /> */}
            <ul class='nav mb-4 justify-content-end align-self-center'>
              <Link class='col-md-5 ms-7 mt-3 px-5' to="/" >
                <i class='bi bi-arrow-left-square'> Back</i>
              </Link>
              <li class='col-md-1 ms-2 mt-3 px-5 '>
                <i class='bi bi-gear-wide'></i>
              </li>
              <li class='col-md-1 ms-2 mt-3 px-5'>
                <i class='bi bi-person'></i>
              </li>
              <li class='col-md-1m ms-2 mt-3 px-3'>
                <i
                  class='bi bi-plus-circle'
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
              <li class='col-md-2 ms-5 mt-3'>
                <i class='bi bi-lightbulb'></i>
              </li>
            </ul>
          </div>
      </div>
    </>
  );
}
