import React from 'react'
import Heropage from './HeroPage';
import './App.css'
import Motorcycles from './Motorcycles';
import Shop from './Shop';
import Service from "./Service"
import LocateUs from "./LocateUs"
import Ourworld from "./Ourworld"
import Support from "./Support"
import Login from "./Login"
import Ride from "./Ride"
import Footer from './Footer';

import { Routes,Route } from 'react-router-dom';
import Navbar1 from './Navbar1';

const App=()=> {
  return(
    <>
   
   
   <Navbar1/>

   <Routes>
   <Route exact path='/'  element={<Heropage/>}/>
    <Route exact path='/Motorcycles'  element={<Motorcycles/>}/>
    <Route exact path='/Shop'  element={<Shop/>}/>
    <Route exact path='/Service'  element={<Service/>}/>
    <Route exact path='/Ride'  element={<Ride/>}/>
    <Route exact path='/Ourworld'  element={<Ourworld/>}/>
    <Route exact path='/Support'  element={<Support/>}/>
    <Route exact path='/LocateUs'  element={<LocateUs/>}/>
    <Route exact path='/Login'  element={<Login/>}/>
   </Routes>
   <div className='myfooter'>
   
    <Footer/>
   </div>
    </>
  )
  
};

export default App
