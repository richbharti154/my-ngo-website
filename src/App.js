import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home.js'
import Aboutus from './Pages/Aboutus/Aboutus.js'
import Education from './Pages/Education/Education.js'
import Programme from './Pages/Programme/Programme.js'
import Gallery from './Pages/Gallery/Gallery.js'
import Joinus from './Pages/Joinus/Joinus.js'
import Signup from  './Component/SignUp/Signup.js'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Programme' element={<Programme/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Joinus' element={<Joinus/>}/>
        <Route path='/Registeer' element={<Signup/>}/>
      </Routes>
    </div>
       
  );
}

export default App;
