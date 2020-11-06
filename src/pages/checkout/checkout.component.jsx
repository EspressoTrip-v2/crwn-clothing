// import React from 'react';

/* SELECTOR */
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

/* REDUX ITEM MODULES */
import {connect} from 'react-redux';

/* REACT ELEMENTS */
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

/* STYLED COMPONENTS */
import {CheckOutPageContainer, CheckOutHeaderContainer, CheckOutHeaderBlock, TotalContainer, TestWarningContainer, StripeCheckoutButtonStyled} from './checkout.styled';


const CheckoutPage = ({cartItems, total})=>(
    
<CheckOutPageContainer>
    <CheckOutHeaderContainer>
            
        <CheckOutHeaderBlock>
                <span>Product</span>
        </CheckOutHeaderBlock>
        
        <CheckOutHeaderBlock>
            <span>Description</span>
        </CheckOutHeaderBlock>
        
        <CheckOutHeaderBlock>
            <span>Quantity</span>
        </CheckOutHeaderBlock>
        
        <CheckOutHeaderBlock>
            <span>Price</span>
        </CheckOutHeaderBlock>
        
        <CheckOutHeaderBlock>
            <span>Remove</span>
        </CheckOutHeaderBlock>  
        
    </CheckOutHeaderContainer>
        {
            cartItems.map((cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem} />))
            
        }
        <TotalContainer>Total: ${total}</TotalContainer>
        <TestWarningContainer>*Please use the following credit card number for test payments*
        <br/>
        5555 5555 5555 4444
        </TestWarningContainer>
        <StripeCheckoutButtonStyled price={total}/>
        
</CheckOutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
    
})


export default connect(mapStateToProps)(CheckoutPage);