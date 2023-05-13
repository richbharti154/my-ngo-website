import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home.js'
import Aboutus from './Pages/Aboutus/Aboutus.js'
import Education from './Pages/Education/Education.js'
import Programme from './Pages/Programme/Programme.js'
import Gallery from './Pages/Gallery/Gallery.js'
import Joinus from './Pages/Joinus/Joinus.js'
import Login from  './Component/Login/Login.js'
import AdoptChild from  './Component/AdoptChild/AdoptChild.js'
import Rohan from  './Component/Adopt/Rohan.js'
import Shreya from  './Component/Adopt/Shreya.js'
import Sohan from  './Component/Adopt/Sohan.js'
import Rohit from  './Component/Adopt/Rohit.js'
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
        <Route path='/Login' element={<Login/>}/>
        <Route path='/AdoptChild' element={<AdoptChild/>}/>
        <Route path='/Rohan' element={<Rohan/>}/>
        <Route path='/Shreya' element={<Shreya/>}/>
        <Route path='/Sohan' element={<Sohan/>}/>
        <Route path='/Rohit' element={<Rohit/>}/>
        
      </Routes>
    </div>
       
  );
}

export default App;
