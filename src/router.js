import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Products from './orders/orderIndex';
import IndexPage from './routes/IndexPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/routes" exact component={IndexPage}/>
        <Route path="/orders" exact component={Products} />
      </Switch>
    </Router>
  );
}


export default RouterConfig;
