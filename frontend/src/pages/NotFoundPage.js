import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className='container text-center text-light mt-5 pt-5'>
      <div className='mb-5'>
        <h3>This page could not be found</h3>
      </div>
      
      <Link to="/" className='mt-5'>Go Home</Link>
    </div>
  );
}