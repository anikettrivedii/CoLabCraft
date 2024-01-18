import React from 'react'
import { useTheme } from '../Context/themecontext'
import'./Login/login.css';
import {NavLink} from'react-router-dom';
// import img from '../../Assests/bgg.png';



export default function Signup() {
  const theme=useTheme();
  return (
    <>
    <div className='flex items-center justify-center h-screen body rounded'>
    
    
    {/* <div className='relative h-32 w-32 bg-blue-500 rounded-full overflow-hidden'> */}
      <div className='absolute top-0 left-0 right-0 h-72  rounded-b-full rotate-360 bg-cyan-800'></div>
    {/* </div> */}

     
      <div className=' grid grid-cols-2 gap-2 w-7/12 h-10/12
       rounded-lg p-6 bg-transparent z-10 ' style={{backgroundColor:"#164e70",opacity:".9"}}>
        <div className='form '>
        <h1 style={{color:theme.color}}className='font-bold text-4xl'>Create your account</h1><br></br>
        <form action="" class="form">
        <label for="name" className="form__label text-2xl">Name</label>
      <div className='rounded m-4 w-9/12 border-2'>
      
     
      <input type="text" placeholder="name" class="form__input" id="name" className='w-11/12 bg-transparent h-12 'required style={{outline:"none"}}/></div>
      <label for="collegeid" className="form__label text-2xl">College Id</label>
      <div className='rounded m-4 w-9/12 border-2 '>

      <input type="text" placeholder="Year" class="form__input" id="year" className='w-11/12 bg-transparent h-12'required style={{outline:"none"}}/></div>
      <label for="year" className="form__label text-2xl">Year</label>
      <div className='rounded m-4 w-9/12 border-2 '>
      <input type="text" placeholder="Branch" class="form__input" id="branch" className='w-11/12 bg-transparent h-12'required style={{outline:"none"}}/></div>
      <label for="branch" className="form__label text-2xl">Branch</label>
      <div className='rounded m-4 w-9/12 border-2 '>
      <input type="email" placeholder="College email id" class="form__input" id="college email id" className='w-11/12 bg-transparent h-12'required style={{outline:"none"}}/></div>
      {/* <div className='rounded m-4 grid grid-cols-2 gap-2'>
        <div> */}
        {/* <label for="remember" class="form_label">Remember me</label>
        <input type="checkbox" id="remember"/></div>
        <NavLink to="">Forget Password</NavLink>
      </div> */}
       <NavLink to="/signup/last"className="text-white">Next</NavLink>
      
    </form>
        </div>
        <div>
        <form action="" className="form pt-16">
        <label for="name" className="form__label text-2xl">FirstDomain*</label>
        <div className='rounded m-4 w-9/12 border-2 '>
      <input type="text" placeholder="first domain" class="form__input" id="firstdomain" className='w-11/12 bg-transparent h-12'required style={{outline:"none"}}/></div>
      <label for="name" className="form__label text-2xl">SecondDomain(optional)</label>
        <div className='rounded m-4 w-9/12 border-2 '>
      <input type="text" placeholder="Second domain" class="form__input" id="seconddomain" className='w-11/12 bg-transparent h-12'required style={{outline:"none"}}/></div>
      <label for="name" className="form__label text-2xl">ThirdDomain(optional)</label>
        <div className='rounded m-4 w-9/12 border-2 '>
      <input type="text" placeholder="third domain" class="form__input" id="thirddomain" className='w-11/12 bg-transparent h-12'required style={{outline:"none"}}/></div> 
        
        </form>
        </div>
      </div>
    </div>
   

    </>
  )
}
