import React from 'react'

export default function Search() {
  return (
    <div className='w-full h-full border-2 rounded-lg border-slate-800  '>
      <div className='rounded m-4 w-11/12 border-2 rounded-lg border-slate-800 bg-slate-800'>
      <i class="fa fa-search"style={{marginRight:"7px"}}></i>
      <input type="text" placeholder="search...." class="form__input" id="search" className='w-11/12 bg-transparent h-12'style={{outline:"none"}}/> 
      </div>
      <div className='border-2 rounded-lg border-slate-800 grid grid-rows-5 gap-4 p-5 w-11/12 bg-slate-800 m-4'>
          <h1 className='border-b-2 font-bold text-white text-2xl border-gray-700'>You Might also like</h1>
          <h1 className='border-b-2 font-bold text-white text-3xl border-gray-700'></h1>
          <h1 className='border-b-2 font-bold text-white text-3xl border-gray-700'></h1>
          <h1 className='border-b-2 font-bold text-white text-3xl border-gray-700'></h1>
          <h1 className='border-b-2 font-bold text-white text-3xl border-gray-700'></h1>
      </div>
      <div className='border-2 rounded-lg border-slate-800 grid grid-rows-5 gap-4 p-5 w-11/12 bg-slate-800 m-4'>
          <h1 className='border-b-2 font-bold text-white text-2xl border-gray-700'>you </h1>
          <h1 className='border-b-2 font-bold text-white text-3xl border-gray-700'></h1>
          <h1 className='border-b-2 font-bold text-white text-3xl border-gray-700'></h1>
          <h1 className='border-b-2 font-bold text-white text-3xl border-gray-700'></h1>
          <h1 className='border-b-2 font-bold text-white text-3xl border-gray-700'></h1>
      </div>
    </div>
  )
}
