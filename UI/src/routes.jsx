import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Profile from './Profile';
import { NavLink } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { History } from 'history';
 
const Routes = (props) => (
    <Router history={browserHistory} {...props}>
        <Route path="/" component={App}>
            <Route path="/Profile" component={Profile} />
            
        </Route>
    </Router>
);
export default Routes;



