import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/HeaderComponents/Header';
import Footer from './components/FooterComponents/Footer';
import Home from './container/Home/Home';
import Shop from './container/Shop/Shop';
import Login from './container/Account/Login';
import ShopDetail from './container/ShopDetail/ShopDetail';
import Checkout from './container/Checkout/Checkout';
import History from './container/History/History';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import allReducers from './redux/reducers/index';

import 'antd/dist/antd.css';
import "./css/style.css";
import "./css/elegant-icons.css";
import "./css/new.css";
import "./sass/_header.scss";
import "./sass/_responsive.scss";
import "./css/bootstrap.min.css";
import "./css/owl.carousel.min.css";
import "./css/login.css";
import "./css/nice-select.css"

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const store = createStore(allReducers,composeEnhancers());

window.dispatch = store.dispatch;

ReactDOM.render(
<<<<<<< HEAD
  <>
    <Header></Header>
    <Router className="">
      <>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login}/>
        <Route path="/shop-detail" component={ShopDetail} />
        <Route path="/signup" component={Signup} />
      </>
=======
  <Provider store={store}>
    <Router>
      <Header></Header>
      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/login" component={Login} />
      <Route path="/shop-detail" component={ShopDetail} />
      <Route path="/check-out" component={Checkout}/>
      <Route path="/history" component={History}/>
      <Footer></Footer>
>>>>>>> sua-fe
    </Router>
  </Provider>,
  document.getElementById('root')
);