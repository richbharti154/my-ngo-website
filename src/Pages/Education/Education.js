import React from 'react'
import {useState} from 'react'
import ReactPlayer from "react-player";
import style from './Education.module.css'
export default function Education(){
    const [isBouncing, setIsBouncing] = useState(false);
    function handleButtonClick() {
        setIsBouncing(true);
        setTimeout(() => {
          setIsBouncing(false);
        }, 1000);
      }
    return(
        <section className={style.educationSection}>
         <div className={style.sectionTitle}>Education</div>
            <ReactPlayer autoplay muted loop
                    url='https://www.youtube.com/watch?v=sCPREA5NFTU' 
                    width = '100%'
                    height = '100%'
                    controls = {true}
                   className={style.video}
                   />
                   
                
                <div  className={`${style.container} ${isBouncing ? style.bounce : ''}`}>
             <h3 className={style.heading}>Education is Essential For <br/>
             <strong>Better Future</strong>
             </h3>
           <p className={style.paragraph}>
           The transformative power of education and how it can be used 
           to create positive change in the world. It could be a good fit 
           for an NGO that focuses on education or uses education as a tool
            to address social, cultural, environmental or humanitarian issues.
           </p>
           
           <button className={style.button} onClick={handleButtonClick}>Explore now</button>
          </div>
        </section>
    )
}