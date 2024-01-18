import React from 'react'
import { useTheme } from '../../Context/themecontext'
import'./login.css';
import {NavLink} from'react-router-dom';
// import img from '../../Assests/bgg.png';
import myimg from '../../Assests/WhatsApp_Image_2024-01-18_at_1.04.57_AM-removebg-preview.png'




export default function Login() {
  
  const handlesubmit=(e)=>{
   
    if((document.getElementById('username').value==="")||(document.getElementById('password').value==="")){
      e.preventDefault();     
      alert("Fill Details?");

        
    }
    else
    
    alert("Successfully Login!");
    
}
  const theme=useTheme();
  return (
    <>
    <div className='flex items-center justify-center h-screen body rounded'>
    
    
    {/* <div className='relative h-32 w-32 bg-blue-500 rounded-full overflow-hidden'> */}
      <div className='absolute top-0 left-0 right-0 h-72 rounded-b-full rotate-360 bg-cyan-800'style={{backgroundColor:"bg-cyan-800"}}></div>
    {/* </div> */}

     
      <div className=' grid grid-cols-2 gap-2 w-7/12 h-10/12
       rounded-lg p-6 bg-transparent z-10 ' style={{backgroundColor:"#164e70",opacity:".9"}}>
        <div className='form '>
        <h1 style={{color:theme.color}}className='font-bold text-4xl'>Sign into your account</h1><br></br>
        <form action="" class="form">
        <label for="name" className="form__label text-2xl">Username</label>
      <div className='rounded m-4 w-9/12 border-2'>
      <i class="fa fa-user-circle-o"style={{marginRight:"7px"}}></i>
     
      <input type="text" placeholder="username" class="form__input" id="username" className='w-11/12 bg-transparent h-12'style={{outline:"none"}}/></div>
      <label for="Password" className="form__label text-2xl">Password</label>
      <div className='rounded m-4 w-9/12 border-2 '>
      <i class="fa fa-lock"style={{marginRight:"8px"}}></i>

      <input type="password" placeholder="password" class="form__input" id="password" className='w-11/12 bg-transparent h-12' style={{outline:"none"}}/></div>
      <div className='rounded m-4 grid grid-cols-2 gap-2'>
        <div>
        <label for="remember" className="form_label font-bold">Remember me</label>
        <input type="checkbox" id="remember"/></div>
        <NavLink to="" className="font-bold">Forget Password</NavLink>
      </div>
      <NavLink to="/dashboard">
      <button class="btn-donate"onClick={handlesubmit}>
      Login
</button></NavLink>
<p className='ml-28'>Don't have an account?<NavLink to='/signup'style={{color:theme.color}}>Sign up</NavLink></p>
    </form>
        </div>
        
        <div className='logo'>
          <img src={myimg} alt="no"></img>
        </div>
      </div>
    </div>
   

    </>
  )
}
