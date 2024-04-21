import React from 'react'

function Completeprofile() {
  return (
    <div className=' h-screen flex justify-center items-center'>
        <div className="centerBox flex flex-col gap-14">
            <h1 className=' font-bold'>Complete Your Profile</h1>

            <form action="" className='flex flex-col gap-14'>
                <div className="firstname flex flex-col">
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" className=' bg-slate-400'/>
                </div>

                <div className="lastName flex flex-col">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" className=' bg-slate-400' />
                </div>
                
                <div className="dateofbirsth flex flex-col">
                    <label htmlFor="Date">Date of birth</label>
                    <input type="date" />
                </div>

                <div className="mobileNumber flex flex-col">
                    <label htmlFor="Mobile"> Mobile Number</label>
                    <input type="number" className=' bg-slate-300'/>
                </div>


                <button className=' bg-slate-300'>Save and Proceed</button>
            </form>
        </div>
    </div>
  )
}

export default Completeprofile