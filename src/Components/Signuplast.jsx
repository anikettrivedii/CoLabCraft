import React from 'react'
import { useTheme } from '../Context/themecontext'
import'./Login/login.css';
import {NavLink} from'react-router-dom';
// import img from '../../Assests/bgg.png';
import myimg from '../Assests/WhatsApp_Image_2024-01-18_at_1.04.57_AM-removebg-preview.png'



export default function Signuplast() {
    const handlesubmit=(e)=>{
        
        if((document.getElementById('username').value==="")||(document.getElementById('password').value==="")||(document.getElementById('confirm').value==="")){
            e.preventDefault();
                alert("Fill Details?");
            
        }
        else if((document.getElementById('password').value)!==(document.getElementById('confirm').value)){
            e.preventDefault();
            alert("password are not similar!")
        }
        else
        alert("Successfully Created!");
        
        
    }
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
        <h1 style={{color:theme.color}}className='font-bold text-4xl'>One last to set up your account</h1><br></br>
        <form action="" class="form">
        <label for="username" className="form__label text-2xl">Username</label>
      <div className='rounded m-4 w-9/12 border-2'>
      
     
      <input type="text" placeholder="username" class="form__input" id="username" required className='w-11/12 bg-transparent h-12 'style={{outline:"none"}}/></div>
      <label for="password" className="form__label text-2xl">Enter your password</label>
      <div className='rounded m-4 w-9/12 border-2 '>

      <input type="password" placeholder="Enter your password" class="form__input" id="password" required className='w-11/12 bg-transparent h-12' style={{outline:"none"}}/></div>
      <label for="password" className="form__label text-2xl">Confirm your password</label>
      <div className='rounded m-4 w-9/12 border-2 '>
      <input type="password" placeholder="Confirm your password" class="form__input" id="confirm" required className='w-11/12 bg-transparent h-12' style={{outline:"none"}}/></div>
      <NavLink to="/signup"className="text-white">Prev</NavLink><br></br>
      <NavLink to="/dashboard">
      <button className="btn-donate" onClick={handlesubmit}>
      Create
</button></NavLink>
       
      
<p className='ml-28'>Already have one ?<NavLink to='/'style={{color:theme.color}}>Login</NavLink></p>
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
