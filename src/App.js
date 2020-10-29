import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    /* ASSIGN TO UNSUBSCRIBE_FROM_AUTH */
    /* LISTENER GETTING USER AUTH IF STATE HAS CHANGED  */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);
      /* CHECK IF USER AUTH IS NOT NULL */
      if (userAuth) {
        /* GET THE USER REFERENCE OBJECT FROM THE CERATE PROFILE FUNCTION */
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          /* GET THE SNAPSHOT OF USER REFERENCE TO EXTRACT THE DATA*/
          userRef.onSnapshot((snapshot) => {
            /* SET THE STATE */
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            });
          });
        }
      }
      /* IF USER AUTH IS NULL SET STATE TO NULL */
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
