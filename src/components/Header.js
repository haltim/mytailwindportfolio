import React from 'react';
import {Link} from "react-router-dom";

const head = {
  position: 'sticky',
  top: '0',
  width: '100%',
  overflow: 'hidden',
  backgroundColor: 'rgb(18,18,18)',
  padding: '10px 0'

};

const Header = () => {
  return (
    <nav className='space-x-10' style={head}>
      <ul className='flex flex-row md:text-xl justify-center md:justify-end'>
      <li>
          <Link to='/' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/projects' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Projects
          </Link>
        </li>
        <li>
          <Link to='/skills' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Skills
          </Link>
        </li>
       
        <li>
          <Link to='/contact' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Contact
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Header