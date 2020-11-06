// import React from 'react';

/* REDUX MODULES */
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

/*REACT COMPONENTS*/
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';

/* SELECTORS */
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import {withRouter} from 'react-router-dom';

/* STYLED COMPONENTS */
import {CartDropDownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles'


const CartDropdown = ({cartItems, history, dispatch})=>{
    
    return(
    
    <CartDropDownContainer>
        <CartItemsContainer>
            {   cartItems.length ?
                cartItems.map((item)=><CartItem key={item.id} item={item}/>)
                : ( <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)  
            }
            
        </CartItemsContainer>
        <CustomButton style={{marginTop: 'auto'}}  onClick={() =>{history.push('/checkout'); dispatch(toggleCartHidden())}} >GO TO CHECKOUT</CustomButton>
    </CartDropDownContainer>
    
)}

/* GET STATE FROM REDUX STORE */
const mapStateToProps = createStructuredSelector({cartItems: selectCartItems})

export default withRouter(connect(mapStateToProps)(CartDropdown));