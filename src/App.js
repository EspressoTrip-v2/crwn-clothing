import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* REDUX ITEM MODULES */
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

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

/* GET THE STATE FROM REDUX STORE */
const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

/* CHANGE STATE WITH DISPATCH, SEND TO ACTION */
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
