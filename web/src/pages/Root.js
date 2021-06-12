import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PagesPontosSearch from './Pontos/Search/Search';
import PagesPontosForm from './Pontos/Form/Form';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={PagesPontosForm} />
        <Route path="/edit/:id" component={PagesPontosForm} />
        <Route path="/" component={PagesPontosSearch} />
      </Switch>
    </Router>
  );
};

export default Root;

