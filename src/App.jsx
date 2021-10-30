import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Informations from './components/Informations/Informations';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Quiz" component={Quiz} />
        <Route path="/Informations" component={Informations} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
