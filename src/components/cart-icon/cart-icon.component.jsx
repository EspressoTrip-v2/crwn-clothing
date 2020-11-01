import React from 'react';
import './cart-icon.styles.scss'

/* REACT COMPONENTS*/
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';

/* REDUX ACTIONS */
import {toggleCartHidden} from '../../redux/cart/cart.actions';

/* SELECTORS */
import {createStructuredSelector} from 'reselect';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';


const CartIcon = ({toggleCartHidden, itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
     <span className="item-count">{itemCount}</span>
    </div>
    
)

/* GET STATE FROM REDUX STORE */
const mapStateToProps = createStructuredSelector({
    
    itemCount: selectCartItemsCount   })


/* CHANGE STATE WITH DISPATCH, SEND TO ACTION */
const mapDispatchToProps = (dispatch) => ({    
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
