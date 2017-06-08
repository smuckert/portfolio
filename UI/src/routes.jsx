import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Profile from './Profile';
import { NavLink } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { History } from 'history';
import UI from './UI';
import Djur from './djur';
import Booking from './booking';
import Inkorg from './inkorg';

const Routes = (props) => (
    <Router history={browserHistory} {...props}>
        <Route path="/" component={App}>
        <Route path="/UI" component={UI} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Inkorg" component={Inkorg} />
         <Route path="/Djurprofil" component={Djur} />
          <Route path="/Bokning" component={Booking} />

            
        </Route>
    </Router>
);
export default Routes;



