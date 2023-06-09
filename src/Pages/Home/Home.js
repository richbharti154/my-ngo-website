import React from 'react'
import Navbar from '../../Component/Navbar/Navbar.js'
import Home1 from './Home.module.css'
import Aboutus from '../Aboutus/Aboutus.js'
import Education from '../Education/Education.js'
import Programme from '../Programme/Programme.js'
import Gallery from '../Gallery/Gallery.js'
import Joinus from '../Joinus/Joinus.js'
import Footer from '../Footer/Footer.js'
// import {Link} from 'react-router-dom'

export default function Home(){
    
    
    return(
        <>
        <div id="Home" className={Home1.Container}>
        
         <Navbar  className={Home1.navbar1}/>
         <div className={Home1.wrap}>
            <div className={Home1.ngo}>
        <h1 className={Home1.ngo1}>NGO WEBSITE</h1>
        </div>
         </div>
        </div>
        <div id='Aboutus'>
         
         <Aboutus/>
         </div>
         <div id='Programme'>
         <Programme/>
         </div>
     
         <div id='Education'>
           <a><Education/></a>
           </div>
           <div id='Gallery'>
           <Gallery/>
           </div>
           <div id='Joinus'>
           <Joinus/>
           </div>
         
          <Footer/>
          
         </>
    )
}
