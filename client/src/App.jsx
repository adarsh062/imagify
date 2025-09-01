import React, { useContext } from 'react'
import Home from './pages/Home.jsx'
import Result from './pages/Result.jsx'
import BuyCredit from './pages/BuyCredit.jsx'
import Login from './components/login.jsx'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { Appcontext } from './context/Appcontext.jsx'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' ;

const App = () => {

  const {showLogin}=useContext(Appcontext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen 
                    bg-gradient-to-b from-teal-100 to-orange-100'>
      

      <ToastContainer position='bottom-right'/>
      <NavBar/>
      {showLogin && <Login/>}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes> 

      <Footer />
    </div>
  )
}
export default App
