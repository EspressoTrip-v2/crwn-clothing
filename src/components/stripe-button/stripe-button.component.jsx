import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HjBxxIbGxMIzQER4SlEsQfkCYBaOs8us5mSC9PSbwAgk9gQVZqoahUlPfQr5hd0iHwRWFZhEbZ9O3ai4hBFBWWu00la2I1VaU'
    const onToken = token => {
        alert('Payment Successful');
    }
    return (
        
        <StripeCheckout  
        label='Pay Now'
        name="CRWN Clothing LTD."
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
    
    
}

export default StripeCheckoutButton;