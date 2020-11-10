import React from 'react';

/* STRIPE CHECKOUT BUTTON */
import StripeCheckout from 'react-stripe-checkout';

/* AXIOS */
import axios from 'axios';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HjBxxIbGxMIzQER4SlEsQfkCYBaOs8us5mSC9PSbwAgk9gQVZqoahUlPfQr5hd0iHwRWFZhEbZ9O3ai4hBFBWWu00la2I1VaU'
    const onToken = token => {
        axios({
            method: 'post',
            url: '/payment',
            data:{
                token,
                amount:priceForStripe   
            }
            
        }).then(res =>alert(`Payment of $${price} successful`)).catch(err =>{
            console.log('Payment Error:',err.message)
            alert('Your payment has failed, please use the provided test credit card number.')
        })
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