import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
