import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
