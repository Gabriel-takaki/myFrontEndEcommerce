import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContextProviders from './ContextProvider';

import {
  Login,
  Search,
  Cart,
  Payment,
  payMetods
} from './pages/Index';


class App extends React.Component {

  render() {
    return (
      <ContextProviders>
      <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/cart" component={ Cart } />
      <Route exact path="/payment" component={ Payment } />
      <Route exact path="/paymetods" component={ payMetods } />

      </Switch>
      </ContextProviders>
    );
  }
}

export default App;
