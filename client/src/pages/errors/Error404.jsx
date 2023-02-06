import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className='error__page'>
      <h1>Error 404</h1>
      <h2>PAGE NOT FOUND</h2>

      <div className='btn__container'>
        <Link className='btn' to='/'>
          Home
        </Link>
      </div>
    </div>
  );
}

export default Error404;
