import './App.css';

import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/hompage.component';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
