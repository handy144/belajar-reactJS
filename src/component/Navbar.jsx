import React from 'react'

const Navbar = () => {
  return (
  // <div className="bg-zinc-700 text-white flex justify-center rounded-b-2xl shadow-2xl shadow-amber-300 " >
  //     <h1 className='logo font-bold text-3xl text-center'>Todo</h1>
  //     <button className='bg-blue-500 gap-7'>Add</button>
  // </div>
   <div className="bg-zinc-700 text-white relative rounded-b-2xl shadow-md shadow-zinc-800 py-1">
      <h1 className="logo font-bold text-3xl text-center">Todo</h1>
      <div className=" flex flex-row absolute right-4 top-0.5 justify-between gap-4 items-center">
        <p>Name</p>
        <p className='rounded-full bg-blue-500 py-2 px-4'>0</p>
      </div>
    </div>
  )
}

export default Navbar