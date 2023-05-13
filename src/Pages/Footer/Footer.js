import React from 'react'
import style from '../../Pages/Footer/Footer.module.css'
export default function Footer() {
    return (
        <>
        <footer className={style.footer}>
         <div className={style.container}>
            <div className={style.newslettercontainer}>
                <img src='' 
                alt ='' className={style.image}/>
                {/* <p className={style.paragraph}>NGO</p> */}
                <p className={style.paragraph1}>
                    lorem ipsum dorum sit amet consectuter adipicing elit Dorem
                    reprenderit it quam mobis possimus velit?
                </p>
                <input type='text' placeholder='Enter your email id' className={style.input}/>
            </div>
            <div className={style.linkContainer}> 
            <div className={style.title}>
                useful Links </div> 
                <ul>
                    <li>
                        <a  style={{color: '#7f7f7f'}}href='/'>Home</a>
                    </li>
                    <li>
                        <a  style={{color: '#7f7f7f'}} href='/Aboutus'>Aboutus</a>
                    </li>
                    <li>
                        <a  style={{color: '#7f7f7f'}}href='/Programme'>Programme</a>
                    </li>
                    <li>
                        <a style={{color: '#7f7f7f'}}href='/Education'>Education</a>
                    </li>
                    <li>
                        <a style={{color: '#7f7f7f'}} href='/Gallery'>Gallery</a>
                    </li>
                    <li>
                        <a style={{ color: '#7f7f7f'}}href='/Joinus'>Joinus</a>
                    </li>
                </ul>
               
            </div>
            <div className={style.connect}>
             <div className={style.title}>
                connect with us </div>
                <p > Bairagi tola bandha baijhnathpur Deoghar jharkhand</p>
                <p>richabharti154@gmail.com</p>
                <p>9155975304</p>
            
            </div>

         </div>
        </footer>
        </>
    )
}