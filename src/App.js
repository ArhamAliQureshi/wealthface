
import React from 'react';
import './App.css';
// import { Provider } from 'react-redux'
// import store from './store'
import Nav from './Components/Nav'
import Home from './Configs/Home'
import Settings from './Configs/Settings'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Redirect path="/" exact to="/home" />
          <Route path="/home" exact component={Home} />
          <Route path="/settings" exact component={Settings} />
        </Switch>
      </div>
    </Router>

  );
}

const dump = ()=>(
  <div>
    <h1>DUMO</h1>
  </div>
);

export default App;
