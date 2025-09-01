import React from 'react'
import Header from '../components/Header'
import Steps from '../components/steps'
import Discription from '../components/Discription'
import Testimonials from '../components/Testimonials'
import GenerateButton from '../components/GenerateButton'


const Home = () => {
  return (
    <div>
      <Header />
      <Steps/>
      <Discription/>
      <Testimonials/>
      <GenerateButton/>
    </div>
  )
}

export default Home
