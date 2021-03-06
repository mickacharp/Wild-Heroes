import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Quiz from './components/Quiz/Quiz';
import Home from './components/Home/Home';
import Informations from './components/Informations/Informations';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/informations" component={Informations} />
      </Switch>
    </>
  );
}

export default App;
