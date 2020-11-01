import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/* REACT COMPONENTS */
import Header from './components/header/header.component';

/* REACT PAGES */
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

/* FIREBASE */
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* REDUX ITEM MODULES */
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

/* SELECTORS */
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    /* GET THE CURRENT USER FROM REDUX PROPS */
    const { setCurrentUser } = this.props;

    /* ASSIGN TO UNSUBSCRIBE_FROM_AUTH */
    /* LISTENER GETTING USER AUTH IF STATE HAS CHANGED  */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      /* CHECK IF USER AUTH IS NOT NULL */
      if (userAuth) {
        /* FIREBASE CODE */
        /* GET THE USER REFERENCE OBJECT FROM THE CREATE PROFILE FUNCTION */
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          /* GET THE SNAPSHOT OF USER REFERENCE TO EXTRACT THE DATA*/
          userRef.onSnapshot((snapshot) => {
            /* SET THE STATE */
            setCurrentUser({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            });
          });
        }
      }
      /* IF USER AUTH IS NULL SET STATE TO NULL */
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
            render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
          />
        </Switch>
      </div>
    );
  }
}

/* UNDERSTAND REDUX FLOW */

/* 

ACTION -> DISPATCH -> ROOT-REDUCER -> COMPONENT-REDUCER -> STORE -> VIEW CHANGE

*/

/* GET THE STATE FROM REDUX STORE */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

/* CHANGE STATE WITH DISPATCH, SEND TO */
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
