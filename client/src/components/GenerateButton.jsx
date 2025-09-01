import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';

const GenerateButton = () => {

  const {user,setShowLogin} = useContext(Appcontext);
  const navigate = useNavigate();

  const onClickHandler=()=>{
    if(user){
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center my-20 py-12'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>See The Magic. Try Now</h1> 

      <motion.button whileHover={{scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.1 }} 
        className='cursor-pointer sm:text-lg text-white bg-black w-auto mt-8 px-10 py-2.5 
                         flex items-center gap-2 rounded-full'
                         onClick={onClickHandler}> Generate Image
        <img className='h-6' src={assets.star_group} alt="" />
      </motion.button>
    </div>
  )
}
export default GenerateButton
