import React from 'react';
import Home from './home'
import Login from './login'
import { Switch, Route } from 'react-router-dom';

const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
    </Switch>
)

export default AppRoutes