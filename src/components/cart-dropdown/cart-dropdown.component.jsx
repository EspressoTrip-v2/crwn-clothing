import React from 'react';

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

import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems, history, dispatch})=>{
    
    return(
    
    <div className="cart-dropdown">
        <div className="cart-items">
            {   cartItems.length ?
                cartItems.map((item)=><CartItem key={item.id} item={item}/>)
                : ( <span className="empty-message">Your cart is empty</span>)  
            }
            
        </div>
        <CustomButton onClick={() =>{history.push('/checkout'); dispatch(toggleCartHidden())}} >GO TO CHECKOUT</CustomButton>
    </div>
    
)}

/* GET STATE FROM REDUX STORE */
const mapStateToProps = createStructuredSelector({cartItems: selectCartItems})

export default withRouter(connect(mapStateToProps)(CartDropdown));