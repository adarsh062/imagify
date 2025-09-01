import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <Link to='/'>
        <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
        </Link>
        <p className='flex-1 border-l border-gray-400 text-sm pl-4 px-16 mt-2 max-sm:hidden text-gray-500'>All right reserved. Copyright @imagify</p>
        <div className='flex items-center gap-2'>
            <img src={assets.twitter_icon} alt="" className='' />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
        </div>
        
    </div>
  )
}

export default Footer
