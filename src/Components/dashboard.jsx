import React from 'react'
import Search from './Search'
import Profile from './Profile'
import Tweet from './tweet'
import Trending from './Trending'


export default function Dashboard() {
  return (
    <div className='grid grid-cols-4 gap-4 m-6'>
        <div className='h-4/5'>
            <Profile/>
        </div>
        
        <div className=' h-4/5 border-2 rounded-lg border-slate-800 col-span-2 overflow-y-auto'>
            
            <Tweet/>
            {/* <Trending/> */}
        </div>
        
        <div className='h-4/5'>
            
            <Search/>
        </div>

    </div>
  )
}
