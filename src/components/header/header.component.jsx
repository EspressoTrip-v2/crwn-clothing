import React from 'react';

/* REACT COMPONENTS */
import {ReactComponent as Logo} from '../../assets//crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect';

/* STATE SELECTORS */
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {connect} from 'react-redux';

/* STYLED COMPONENTS */
import {HeaderContainer, LogoContainer,OptionsContainer, OptionLink} from './header.styles';

/* ACTIONS */
import {signOutStart} from '../../redux/user/user.actions';


const Header = ({signOutStart,currentUser, hidden})=>{

  return(
    
    <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"/>  
    </LogoContainer> 
    <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        
        <OptionLink to="/shop">Contact</OptionLink>
        
        {
          currentUser? <OptionLink as='div' onClick={signOutStart} >SIGN OUT</OptionLink> : <OptionLink to="/signin">SIGN IN</OptionLink>
        }
      <CartIcon/>
    </OptionsContainer>
    {
    hidden ? null : <CartDropdown />
    }
    </HeaderContainer>
    
)}

/* OPTION A */
/* FUNCTION TO GET STATE REDUX STORE*/
// const mapStateToProps = (state)=>({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

/* BETTER OPTION B USING RESELECT*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);