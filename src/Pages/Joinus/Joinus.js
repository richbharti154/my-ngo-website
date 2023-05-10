 import React from 'react'
import style from './Joinus.module.css'
export default function Home(){
    return(
        <section className={style.FooterSection}>
            <div className={style.container}>
                <div className={style.joinTitle}> Adopt Achild <span className={style.span1}>Save lifes</span></div>
            <p className={style.paragraph}>Lorem ipsum dolar sit amet  consectuter adipsicing elit 
            Earum blanditis unde  aspernature desurent veritatis ,aute  perspecciatis voluptatum explicabo quos</p>
             <button className={style.joinNow}>Join us</button>
             <button className={style.joinNow1}>Adopt a child</button>
             </div>
        </section>
    )
}