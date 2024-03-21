import React from 'react'

function Card() {
  return (
    <div className='bg-white rounded-xl w-[450px] h-[250px] p-12 flex flex-col gap-10'>
      <div className="disc">
        <h1>"Thanks to EcoRide, my first lecture is never missed. My captain arrives in 2-3 minutes and zoop we go" </h1>
      </div>
      <div className="author">
        <h2 className='font-bold'>
          Mukul Kumar
        </h2>
        <p>
          Customer
        </p>
      </div>
    </div>
  )
}

export default Card