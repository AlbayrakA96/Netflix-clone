import React from 'react';

import HomeScreen from './components/HomeScreen';
import MoviePage from './pages/MoviePage';

import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/film">
              <MoviePage />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
