 import React from 'react'
 import {useNavigate} from 'react-router-dom'
 
import style from './Joinus.module.css'
export default function Home(){
    const navigate=useNavigate()
    function handleAlert(){
        alert('U can not Adopt without Login Authentication')
    }

    return(
        <>
      
        <section className={style.FooterSection}>
            <div className={style.container}>
                <div className={style.joinTitle}> Adopt Achild <span className={style.span1}>Save lifes</span></div>
            <p className={style.paragraph}>"If you're interested in adopting one of the many children in our NGO, simply
             log in and browse through our selection to find the perfect match for you."</p>.
             <button className={style.joinNow} onClick={()=>navigate('/Login') }>Join us</button> 
             <button className={style.joinNow1} onClick={handleAlert}>Adopt a child</button>
             </div>
        </section>
        </>
    )
}