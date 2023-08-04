import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import { BiSolidMicrophone } from 'react-icons/bi';
import { BiSolidVideoPlus } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import { MdAccountBox } from 'react-icons/md';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const fontSize = {
  fontSize: '30px',
  marginLeft: '30px',
  backgroundColor: 'gainsboro',
  padding: '5px',
  borderRadius: '50%',
};

const searchButton = {
  color: 'white',
  backgroundColor: 'black',
  padding: '6px 5px',
  borderRadius: '5px',
  border: 'none',
  marginLeft: '5px',
};

const Header = () => {

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className='mx-3 mt-2 align-items-center d-flex flex-wrap' style={{ height: '60px' }}>
      <div className='d-flex align-items-center col-sm-12 col-md-6'>
      <HiOutlineMenuAlt1 className='me-3' style={{fontSize: '40px'}} />
        <BsYoutube className='text-danger' style={{ fontSize: '50px' }} />
        <h1 className='h4 fw-bold ms-2' style={{ cursor: 'pointer' }} onClick={refresh}>
          YouTube
        </h1>
        <div className='flex-grow-1' />
        <div className='input-group w-100 my-2 my-md-0'>
          <input className='form-control ms-5' style={{ padding: '10px', height: '40px', outline: 'none' }} type='search' placeholder='Search' required />
          <button className='btn btn-dark' style={searchButton}>
            Search
          </button>
        </div>
      </div>

      <nav className='d-flex align-items-center cols-4 col-md-6'>
        <ul type='none' className='d-flex align-items-center mb-0 ms-auto'>
          <li><BiSolidMicrophone style={fontSize} /></li>
          <li><BiSolidVideoPlus style={fontSize} /></li>
          <li><IoIosNotifications style={fontSize} /></li>
          <li><MdAccountBox style={fontSize} className='border rounded' /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
