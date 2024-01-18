import React from 'react';
import myimg from '../Assests/OIP-removebg-preview.png'
import './Login/login.css'

const Profile = () => {
  return (
    <div className='w-10/12 h-full border-2 rounded-lg border-slate-800 '>
        {/* profile */}
        <div className='pt-44 flex items-center justify-center '>
            <img src={myimg}
             alt='no'className='w-16 h-16 bg-blue-500 rounded-full'></img> 
        </div>
        <br></br>
        <div className='info flex items-center justify-center grid grid-rows-2 gap-2'>
            <h1 className='text-2xl text-white'>Avantika Sharma</h1>
            <ul className='text-white'style={{listStyle:"circle"}}>
                <li>Web Dev</li><li>ML</li><li>Ar/Vr</li>
                <li>Joined on 2023</li>
            </ul>
        </div>
        <button class="custom-btn btn-1 flex items-center justify-center">Account</button>
    </div>
  );
};

export default Profile;
