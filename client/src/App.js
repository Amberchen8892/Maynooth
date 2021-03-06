import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import Admin from './components/auth/Admin';

import ProductsScreen from './components/screens/ProductsScreen';
import ProductDetail from './components/screens/ProductDetail';
import CartScreen from './components/screens/CartScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ShippingScreen from './components/screens/ShippingScreen';
import PaymentScreen from './components/screens/PaymentScreen';
import PlaceOrderScreen from './components/screens/PlaceOrderScreen';
import OrderScreen from './components/screens/OrderScreen';
import UserListScreen from './components/screens/UserListScreen';
import UserEditScreen from './components/screens/UserEditScreen';
import ProductListScreen from './components/screens/ProductListScreen';
import ProductEditScreen from './components/screens/ProductEditScreen';
import OrderListScreen from './components/screens/OrderListScreen';

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
            {/* <Route path='/admin' component={Admin} /> */}
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/products' component={ProductsScreen} />
            <Route path='/product/:id' component={ProductDetail} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route
              path='/admin/productlist'
              component={ProductListScreen}
              exact
            />
            <Route
              path='/admin/productlist/:pageNumber'
              component={ProductListScreen}
              exact
            />
            <Route path='/admin/orderlist' component={OrderListScreen} />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route
              path='/admin/product/:id/edit'
              component={ProductEditScreen}
            />
            <Route path='/search/:keyword' component={ProductsScreen} exact />
            <Route path='/page/:pageNumber' component={ProductsScreen} exact />
            <Route
              path='/search/:keyword/page/:pageNumber'
              component={ProductsScreen}
              exact
            />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
