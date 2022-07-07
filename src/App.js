import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:roomtype" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
