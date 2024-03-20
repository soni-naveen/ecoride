import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'


import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Searchrides from "../pages/Searchrides";
import Publishedrides from "../pages/Publishedrides";
const Router = () => {
  return (
    <Routes>
        <Route path='/' element = {<Navigate to ='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup closeModel={() => console.log("CLOSEMODEL")}/>} />
    </Routes>
  )
}

export default Router