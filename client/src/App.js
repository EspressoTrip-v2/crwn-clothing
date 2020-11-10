import './App.css';
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/* REACT COMPONENTS */
import Header from './components/header/header.component';

/* REACT PAGES */
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

/* FIREBASE */
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* REDUX ITEM MODULES */
import { checkUserSession } from './redux/user/user.actions';
import { connect } from 'react-redux';

/* SELECTORS */
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

/* SAGAS */

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
        />
      </Switch>
    </div>
  );
};

/* GET THE STATE FROM REDUX STORE */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

/* CHANGE STATE WITH DISPATCH, SEND TO */
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
