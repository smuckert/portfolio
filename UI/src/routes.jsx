import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Profile from './Profile';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
            <Route path="/Profile" component={Profile} />
            
        </Route>
    </Router>
);
export default Routes;