import React, {useState} from 'react'
import Navbar from './Navbar'

const Admin = () => {

    const AddJob = () => {

    }

  return (
    <div className='bg-[#505050] h-[100vh]'>
        <Navbar/>
        <div className='bg-white w-[60vw] h-fit m-auto '>
        <div className='text-black text-xl'>
            <p className='p-4 mt-12'>Admin Dashboard</p>
        </div>
        <div className='mt-8 '>
            <input type="text" placeholder='Job Title' className='p-2 px-4 border-b-2 border-[#838383] w-[40vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200'/><br/>
            <input type="text" placeholder='Skills Required' className='p-2 px-4 mt-8 border-b-2 border-[#838383] w-[40vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200'/><br/>
            <input type="text" placeholder="Organization Name" className="p-2 px-4 mt-8 border-b-2 border-[#838383] w-[40vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200" /><br/>
            <input type="text" placeholder="Description" className="p-2 px-4 mt-8 border-b-2 h-[20vh] border-[#838383] w-[40vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200" /><br/>
            <button className='p-2 mt-8 mb-4 px-4 rounded-md bg-black text-white ' onClick={()=>AddJob()}>Add Job</button>
        </div></div>
    </div>
  )
}

export default Admin