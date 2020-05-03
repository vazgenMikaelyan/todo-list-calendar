import React from 'react';
import {
  Switch, Route,
  BrowserRouter as Router
} from "react-router-dom";

import HomePageComponent from './components/HomePage';
import DatePageComponent from './components/DatePage';

import './AppComponent.css';

function AppComponent() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/"    exact  component={HomePageComponent} />
          <Route path="/todos/:id?" component={DatePageComponent} />
        </Switch>
      </Router>
    </div>
  );
}
export default AppComponent;
