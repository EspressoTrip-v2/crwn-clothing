import React from 'react';

/* REACT COMPONENTS*/
import {connect} from 'react-redux';

/* REDUX ACTIONS */
import {toggleCartHidden} from '../../redux/cart/cart.actions';

/* SELECTORS */
import {createStructuredSelector} from 'reselect';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

/* STYLED COMPONENTS */
import {CartIconContainer, ItemCountContainer, ShoppingIcon} from './cart-icon.styles'


const CartIcon = ({toggleCartHidden, itemCount})=>(
    
    <CartIconContainer onClick={toggleCartHidden}>
        
        <ShoppingIcon className="shopping-icon" />
        
     <ItemCountContainer>{itemCount}</ItemCountContainer>
     
    </CartIconContainer>
    
)

/* GET STATE FROM REDUX STORE */
const mapStateToProps = createStructuredSelector({
    
    itemCount: selectCartItemsCount   })


/* CHANGE STATE WITH DISPATCH, SEND TO ACTION */
const mapDispatchToProps = (dispatch) => ({    
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
