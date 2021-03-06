import React from 'react';

/* STYLED COMPONENTS */
import { CartItemContainer, ItemImage, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer className="item-details">
      <span>{name}</span>
      <span>
        {quantity} x ${quantity * price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);
/* OPTIMISE RE-RENDER FOR ITEMS IN CART */
export default React.memo(CartItem);
