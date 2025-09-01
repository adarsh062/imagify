import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Appcontext } from '../context/Appcontext';

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState('')
  
  const {generateImage} = useContext(Appcontext)

  const onSubmitHand1er = async (e) => {
    e.preventDefault(true);
    setIsLoading(true)
    if (input) {
      const image = await generateImage(input)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
        
      }
    }
    setIsLoading(false)
  }

  return (
    <motion.form
      onSubmit={onSubmitHand1er}
      className='flex flex-col min-h-[90vh] justify-center items-center'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="relative">
          <img src={image} alt="" className='max-w-sm rounded' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 
         ${isLoading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
          <p className={!isLoading ? 'hidden' : ' '}>Loading....</p>
        </div>
      </div>

      {!isImageLoaded &&
        <div className='flex w-full max-w-xl bg-neutral-500 text-white p-0.5 mt-10 rounded-full' >
          <input onChange={e => setInput(e.target.value)} value={input}
            type="text" placeholder='Describe what you want to Generate'
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' />
          <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
        </div>
      }
      {isImageLoaded &&
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full' >
          <p onClick={() => { setIsImageLoaded(false) }}
            className='bg-transparent border border-zinc-90 text-black px-8 py-3 rounded-full cursor-pointer' >
            Generate another</p>
          <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
        </div>
      }
    </motion.form>
  )
}

export default Result;
