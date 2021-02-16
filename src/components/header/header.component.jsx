import React from 'react';
// import { Link } from "react-router-dom";
// import "./header.styles.scss";

import {HeaderContainer,OptionsContainer, OptionDiv, OptionLink, LogoContainer} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from '../../firebase/firebase.utils';
import { connect } from "react-redux";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


function Header({currentUser,hidden}) {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink className="option" to="/shop">
                    CONTACT
                </OptionLink>
                {
                    currentUser 
                    ?
                    <OptionDiv onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionDiv>
                    :
                    <OptionLink className="option" to="/signin"> SIGN IN </OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ? null : 
                <CartDropdown/>
            }
            
        </HeaderContainer>
    )
}

// Destructing Technique 👇

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header); 
