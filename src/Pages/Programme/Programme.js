import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useState} from 'react'
import style from '../../Pages/Programme/Programme.module.css'
export default function Programme(src,alt){
    const [hovered, setHovered] = useState(false);
    const [donationAmount, setDonationAmount] = useState(0);
    function handleMouseEnter(){
        setHovered(true)
    }
    function handleMouseLeave(){
         setHovered(false)
    }
    function handleToken(token) {
        // Make a request to your backend to process the donation
        fetch('/charge', {
          method: 'POST',
          body: JSON.stringify(token),
        })
          .then((response) => {
            // Handle successful donation
          })
          .catch((error) => {
            // Handle donation error
          });
    
        }
            
    return(
        <section className={style.program1}>
            <div className={style.programContainer}>
           <h6 className={style.programme}>Programme</h6>
            <div className={style.boxcontainer}>
                <div className={style.box} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`${style.cardImage} ${hovered ? style.zoom : ''}`} src={src} alt={alt}></div>
            <div className={style.programmetitle}>Education to every child</div>
            <div className={style.donationCount}>Donation Goal:<span>$9845</span>
            </div>
            <button className={style.button1} onClick={() => setDonationAmount(10006)}>Donate Now</button>
           </div>
           <div className={style.box} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div  className={`${style.cardImage1} ${hovered ? style.zoom : ''}`} src={src} alt={alt}></div>
            <div className={style.programmetitle}>Dedication to helping child</div>
            <div className={style.donationCount}>Donation Goal:<span>$9845</span>
            </div>
            <button  className={style.button1}onClick={() => setDonationAmount(4520)}>Donate Now</button>
           </div>
           <div className={style.box} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`${style.cardImage2} ${hovered ? style.zoom : ''}`} src={src} alt={alt}></div>
            <div className={style.programmetitle}>Make life easier for them</div>
            <div className={style.donationCount}>Donation Goal:<span>$9845</span>
            </div>
            <button className={style.button1} onClick={() => setDonationAmount(60000)}>Donate Now</button>
           </div>
           <div className={style.box} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`${style.cardImage3} ${hovered ? style.zoom : ''}`} src={src} alt={alt}></div>
            <div className={style.programmetitle}> clean water for people</div>
            <div className={style.donationCount}>Donation Goal:<span>$9845</span>
            </div>
            <button className={style.button1} onClick={() => setDonationAmount(20000)}>Donate Now</button>
            
           </div>
           </div>
           </div>
           <div className={style.stripe}>
           <StripeCheckout 
              token={handleToken}
              stripeKey="your_stripe_api_key"
              amount={donationAmount * 100}
              currency="USD"
            />
             </div>
      </section>
    )
}