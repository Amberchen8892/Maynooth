import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Admin from './components/auth/Admin';

import ProductsScreen from './components/screens/ProductsScreen';
import ProductDetail from './components/screens/ProductDetail';
import CartScreen from './components/screens/CartScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ShippingScreen from './components/screens/ShippingScreen';
import PaymentScreen from './components/screens/PaymentScreen';
import PlaceOrderScreen from './components/screens/PlaceOrderScreen';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Home} />
        <section>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/admin' component={Admin} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/products' component={ProductsScreen} />
            <Route path='/product/:id' component={ProductDetail} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
