import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function Programme(src, alt) {
  const [donationAmount, setDonationAmount] = useState(0);

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

  return (
    <section className={style.program1}>
      <div className={style.programContainer}>
        <h6 className={style.programme}>Programme</h6>
        <div className={style.boxcontainer}>
          <div className={style.box}>
            <div
              className={`${style.cardImage} ${hovered ? style.zoom : ''}`}
              src={src}
              alt={alt}
            ></div>
            <div className={style.programmetitle}>Education to every child</div>
            <div className={style.donationCount}>
              Donation Goal:<span>$9845</span>
            </div>
            <button className={style.button1} onClick={() => setDonationAmount(10)}>
              Donate $10
            </button>
            <button className={style.button1} onClick={() => setDonationAmount(20)}>
              Donate $20
            </button>
            <StripeCheckout
              token={handleToken}
              stripeKey="your_stripe_api_key"
              amount={donationAmount * 100}
              currency="USD"
            />
          </div>
          {/* Rest of the boxes */}
        </div>
      </div>
    </section>
  );
}




