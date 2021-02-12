import React from 'react';
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IJskvG9thqMJWVojKc4ItlTXXH16aBV4e0yFgvdaPqqltioAVzaAVyq86qyClN3q7yWXyWKCzJGK9RgvQclolCL006JD12yew';
    const onToken = (token) => {
        console.log(token);
        console.log('Payment Successful');
    }
    return (
        <StripeCheckout
            name="CROWN Clothing Pvt. Ltd."
            label="Pay Now"
            billingAddress
            shippingAddress
            // image="/public/favicon.ico"
            description={`Your total is : $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
