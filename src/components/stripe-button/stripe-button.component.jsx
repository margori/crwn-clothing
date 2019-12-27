import React from "react";
import StripeCheckout from "react-stripe-checkout";

import './stripe-button.styles.scss';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Q3h5cLipEFURfnRjWmiArNY200jjGLcffy';

    const onToken = token => {
        alert('Payment successful');
    };

    return (
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken} stripeKey={publishableKey}/>
    );
};

export default StripeButton;
