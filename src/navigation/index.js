import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Login from '../features/login/container';
import Home from '../features/home/container';

export default function MyApp() {
    return (
        <div>
            <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
                <li><Link to="/">Login</Link></li>
                <li><Link to="/home">Home</Link></li>
            </ul> 
            </nav>
        
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
    
        </div>
    )
}