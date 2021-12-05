import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K0lS1JQu63X4xM1OzHw4ztPTknnkswYLyjqCO7fCVH6AimmDA6HnYRhtHtBtoiaAp1Swv7dTT9X2IpgvjXoVPTT00KfBWXAkK';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout 
           label= 'Pay Now'
           name='Test'
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`Yout total is ${price}`} 
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton