import React, { useState, useNavigate } from 'react';
import { Link } from 'react-router-dom';
// import BackIcon from '../assets/icons/BackArrow.svg';
// import LightModeIcon from '../asset/icons/LightMode.svg';
// import AddIcon from '../asset/icons/Add.svg';
// import SettingsIcon from '../asset/icons/Settings.svg';
// import MenuProfilePic from '../asset/MenuProfilePic.png';

export default function ContactHeader() {
  return (
    <>
      <nav class='navbar navbar-light '>
        <div class='container-fluid '>
          <a class='navbar-brand ms-3' href='/'>
            <h3>
              <i class='bi bi-arrow-left-square'> Back</i>
            </h3>
            {/* <img src="../assets/icons/BackArrow.svg" alt="icon" width="30" height="24" className="d-inline-block align-text-top" /> */}
          </a>
          <ul class='nav justify-content-end '>
            <li class='nav-item ms-3 px-5'>
              <Link class='navbar-brand ms-3' onClick={() => {}}>
                <h3>
                  <i class='bi bi-gear-wide'></i>
                </h3>
              </Link>
            </li>
            <li class='nav-item ms-3 px-5'>
              <Link class='navbar-brand ms-3' onClick={() => {}}>
                <h3>
                  <i class='bi bi-person'></i>
                </h3>
              </Link>
            </li>
            <li class='nav-item ms-3 px-5'>
              <Link
                class='navbar-brand ms-3'
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
              >
                <h3>
                  <i class='bi bi-plus-circle'></i>
                </h3>
              </Link>
            </li>
            <li class='nav-item ms-3 px-5'>
              <Link class='navbar-brand ms-3' onClick={() => {}}>
                <h3>
                  <i class='bi bi-lightbulb'></i>
                </h3>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
