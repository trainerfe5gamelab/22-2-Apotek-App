import React from 'react';
import { BsPersonCircle, BsJustify } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ OpenSidebar }) {
  const navigate = useNavigate();
  
  return (
    <header className='header d-flex align-items-center justify-content-between px-3'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-right' style={{ color: 'white', marginLeft: '95%' }} onClick={() => navigate('/profile')}>
        <BsPersonCircle className='icon display-6' />
      </div>
    </header>
  );
}

export default Header;
