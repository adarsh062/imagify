import React from 'react';
import { assets } from '../assets/assets';

const Discription = () => {
  return (
    <div className='flex flex-col items-center justify-center my-26 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col md:flex-row items-center gap-10'>
        <img src={assets.sample_img_1} alt='' className='w-80 lg:w-96 rounded-lg' />

        <div className='flex flex-col gap-5 max-w-xl'>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
          <p className='text-gray-600 mb-8'>
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool transforms your text into
            eye-catching images with just a few clicks. Imagine it, describe it, and watch it
            come to life instantly.
        <p className=''>Simply type in a text prompt, and our cutting-edge AI will generate high-
            quality images in seconds. From product visuals to character designs and
            portraits, even concepts that don't yet exist can be visualized effortlessly.
            Powered by advanced AI technology, the creative possibilities are limitless!</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discription;
