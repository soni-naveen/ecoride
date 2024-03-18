import React, { useState } from 'react'
import Logo from '../../assets/Logo.jpg';
import  Button  from '@mui/material/Button';
import SearchAppBar from './Search';
import BasicMenu from './Profilemenu';
import AddIcon from '@mui/icons-material/Add';
const Header = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  return (
    <>
    <div className="navBar flex justify-between align-middle m-auto">
      <div className="logo ml-20">
        <img src={Logo} alt='Logo' className=' cursor-pointer' />
      </div>
      <div className="navLinks flex justify-between align-middle mt-3 gap-10 pr-10">
        <SearchAppBar className=" bg-black"/>
        {!isLoggedIn && (
          <>
            <Button variant='contained'>Sign Up</Button>
            <Button variant='outlined' onClick={handleLogin}>Login</Button>
          </>
        )}
        {isLoggedIn && (
          <>
            <Button variant='outlined'><AddIcon className='mr-3'/>Publish Ride</Button>
            <BasicMenu/>
          </>
        )}
        
      </div>
    </div>
      
    </>
  )
}

export default Header