import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import { Appcontext } from '../context/Appcontext';

const NavBar = () => {
    const {user,setShowLogin, logout, credit} = useContext(Appcontext);
    const navigate=useNavigate();


  return (
    <div className='flex items-center justify-between py-4'>
    <Link to='/'>
      <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
    </Link>

    <div>
        {user ?
        <div className='flex items-center gap-2 sm:gap-3'>
            <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 
            rounded-full hover:scale-105 transition-all duration-100'>
                <img className='w-5' src={assets.credit_star} alt="" />
            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left :{credit}</p></button>
            <p className='text-gray-600 max-sm:hidden pl-4'>Hi,{user.name}</p>
            <div className='relative group'>
                <img className='w-10 drop-shadow-2xl' src={assets.profile_icon} alt="" />
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12'>
                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                        <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
        :
        <div className='flex items-center gap-4 sm:gap-5'>
            <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <button className='bg-zinc-800 text-white cursor-pointer px-7 py-2 sm:px-10 text-small 
                                 rounded-full  hover:scale-102 transition-all duration-100'
                                 onClick={()=>setShowLogin(true)}>Login</button>
        </div>
        }
        
        
    </div>
    </div>
  )
}

export default NavBar
