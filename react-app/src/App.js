import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
// import NavBar from './components/NavBar';

import SearchBar from './components/Header/SearchBar';

import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Splash from './components/Splash';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'
import AssetDetails from './components/AssetDetails'
import Charts from './components/Dashboard/Chart';
import CreatePortfolioForm from './components/Dashboard/CreatePortfolioForm';
import CreateWatchlistForm from './components/Dashboard/CreateWatchlistForm';
import Watchlist from './components/Watchlist';
import TradeHistory from './components/TradeHistory'

import Header from './components/Header';

// import SlideMenu from './components/SlideMenu';

// import NewPortfolioForm from './components/Dashboard/NewPortfolioForm'
// import NewWatchlistForm from './components/Dashboard/NewWatchlistForm'





import Profile from './components/Profile'

import NewTradeForm from './components/NewTradeForm/NewTradeForm'


import { authenticate } from './store/session';
import { getPortfolios } from './store/portfolio';

// import PortfolioStats from './components/Dashboard/PortfolioStats';

import { getWatchlists } from './store/watchlist';



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPortfolios())
    dispatch(getWatchlists())
  },[dispatch])

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Header />
      <Switch>
        <Route path='/' exact={true}>
            <Splash />
            <Footer />
        </Route>
        <ProtectedRoute path='/account'>
            <Profile />
        </ProtectedRoute>
        <Route path='/dashboard'>
            <Dashboard />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/stock/:ticker' exact={true}>
          <AssetDetails />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/dashboard' exact={true} >
          <SearchBar></SearchBar>
          {/* <GeneralNewsFeed /> */}
        </ProtectedRoute>
        <Route path='/charttest'>
          <Charts portfolioName='Technology'/>
        </Route>
        <Route path='/formtest'>
          <CreatePortfolioForm />
          <CreateWatchlistForm />
          <Watchlist />
        </Route>
        <ProtectedRoute path='/:portfolio/trade-history'>
            <TradeHistory />
        </ProtectedRoute>
        <Route path='/tradeFormTest'>
        <NewTradeForm></NewTradeForm>
        </Route>
        <Route path='/list-style'>
            {/* <SlideMenu /> */}
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
