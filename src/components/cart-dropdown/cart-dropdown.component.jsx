import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from "react-redux";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from '../../redux/cart/cart.selectors';



function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => {
                       return <CartItem key={cartItem.id} item={cartItem} />
                    })
                }
               
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropdown);
