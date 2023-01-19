import React from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetail from '../Animals/AnimalDetail';


function App() {
  const history = useHistory();
  const routeHome = () => {
    alert('There is no place like home');
    history.push('/');
  }

  return (
    <Router>
      <div className="App">
        <h1>SPAs!</h1>

        <ul>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>


        <Route path="/animals" exact>
          <Animals />
        </Route>

        <Route path="/plants">
          <Plants />
        </Route>

        <Route path="/" exact> 
          <Home />
        </Route>

        <Route path="/animals/:id" exact>
          <AnimalDetail />
        </Route>

      </div>
    </Router>
  );
}

export default App;
