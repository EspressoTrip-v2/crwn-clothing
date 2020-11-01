import React from 'react';
import './header.styles.scss'

import {Link} from 'react-router-dom'

/* REACT COMPONENTS */
import {ReactComponent as Logo} from '../../assets//crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect';

/* STATE SELECTORS */
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

/* FIREBASE */
import {auth} from '../../firebase/firebase.utils'

import {connect} from 'react-redux';


const Header = ({currentUser, hidden})=>{

  return(
    
    <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"/>  
    </Link> 
    <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        
        <Link className="option" to="/shop">Contact</Link>
        
        {
          currentUser? <div className="option" onClick={() =>auth.signOut()} >SIGN OUT</div> : <Link className="option" to="/signin">SIGN IN</Link>
        }
      <CartIcon/>
    </div>
    {
    hidden ? null : <CartDropdown />
    }
    </div>
    
)}

/* OPTION A */
/* FUNCTION TO GET STATE REDUX STORE*/
// const mapStateToProps = (state)=>({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

/* BETTER OPTION B USING RESELECT*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});


export default connect(mapStateToProps)(Header);