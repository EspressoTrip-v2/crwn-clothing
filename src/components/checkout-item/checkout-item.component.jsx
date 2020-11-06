// import React from 'react';

/* REDUX MODULES */
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

/* STYLED COMPONENTS */
import {CheckOutItemContainer, ImageContainer, ItemImage, ItemNamePrice, ItemValue, ItemQuantityContainer, ItemArrow, ItemRemoveButton} from './checkout-item.styles';


const CheckoutItem = ({cartItem, clearItem, addItemToCart, removeItemFromCart}) =>{
    
const {name, imageUrl, price, quantity} = cartItem;
return(
<CheckOutItemContainer>
    <ImageContainer>
        <ItemImage src={imageUrl} alt="item"/>
    </ImageContainer>
        <ItemNamePrice>{name}</ItemNamePrice>
        <ItemQuantityContainer>
          <ItemArrow onClick={() =>removeItemFromCart(cartItem)}>&#10094;</ItemArrow>  
            <ItemValue>{quantity}</ItemValue>
          <ItemArrow onClick={() =>addItemToCart(cartItem)}>&#10095;</ItemArrow>  
        </ItemQuantityContainer>
        <ItemNamePrice>${price}</ItemNamePrice>
    <ItemRemoveButton onClick={() =>clearItem(cartItem)}> &#10005; </ItemRemoveButton>
    
</CheckOutItemContainer>   ) 
    
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItemToCart: (item) => dispatch(addItem(item)),
    removeItemFromCart: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);