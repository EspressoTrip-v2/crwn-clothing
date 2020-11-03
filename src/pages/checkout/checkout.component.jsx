import React from 'react';

/* SELECTOR */
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

/* REDUX ITEM MODULES */
import {connect} from 'react-redux';

/* REACT ELEMENTS */
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss';


const CheckoutPage = ({cartItems, total})=>(
    
    <div className="checkout-page">
        <div className="checkout-header">
            
        <div className="header-block">
                <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>  
        </div>
        {
            cartItems.map((cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem} />))
            
        }
        <div className="total">Total: ${total}</div>
        <div className="test-warning">*Please use the following credit card number for test payments*
        <br/>
        5555 5555 5555 4444
        </div>
        <StripeCheckoutButton price={total}/>
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
    
})


export default connect(mapStateToProps)(CheckoutPage);