import React from 'react'

function Stickingcards(props) {
  return (
    <div className='bg-light-color h-[300px] w-[400px] p-5 flex flex-col gap-5'>
        <div className='text-dark-color'>
            {props.icon}
        </div>
        <div className='text-dark-color font-roboto font-bold text-xl'>
            {props.title}
        </div>
        <div className='text-dark-color'>
            {props.content}
        </div>
    </div>
  )
}

export default Stickingcards