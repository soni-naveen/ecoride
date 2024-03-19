import React,{useRef} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import  Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
const Signup = ({closeModel}) => {
  const modalRef = useRef();
  const buttonRef = useRef();
  const closePage = (e) => {
    if(modalRef.current === e.target || buttonRef.current === e.target) {
      closeModel();
    }
  }
  return (
    <div ref={modalRef} onClick={closePage} className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center w-full'>
      <div className='flex flex-col gap-5 text-white'>
        <button className=' place-self-end' onClick={closeModel}><ClearIcon className=' size-28'/></button>
        <div className=' bg-cyan-800 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
          <h1 className=' text-3xl font-extrabold'>Sign Up</h1>
          <Button variant='outlined' style={{color: 'white'}} className='flex gap-5'>Continue with Google <ArrowForwardIcon/></Button>
          <hr className=' border-white w-full' />
          <form className=' flex flex-col gap-5'>
            <div className=' flex flex-col gap-2'>
                <h5>Email</h5>
                <input 
                  type='email'
                  placeholder='xyz@address.com'
                  required
                  className=' w-full px-4 py-3 text-black border-grary-300 rounded-md'
                />
            </div>
            <div className=' flex flex-col gap-2'>
              <h5>Password</h5>
                <input
                  type='passworrd'
                  placeholder='Password'
                  required
                  className=' w-full px-4 py-3 text-black border-grary-300 rounded-md'
                />
            </div>
            <div className=' flex flex-col gap-2'>
              <h5>Confirm Password</h5>
                <input
                  type='passworrd'
                  placeholder='Confirm password'
                  required
                  className=' w-full px-4 py-3 text-black border-grary-300 rounded-md'
                />
            </div>
          
            <Button ref={buttonRef} variant='contained' className=' mt-4 w-full px-5 py-3 font-medium rounded-md bg-slate-400'>Sign Up</Button>
            <div className=' flex flex-col justify-center items-center'>
              <p>Already a Member? <Link to='/login' className=' text-blue-400' onClick={closeModel}>Log in</Link></p>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup