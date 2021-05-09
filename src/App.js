import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './pages/home';
import {PublicRoute} from './helper/Route';
import Post from "./pages/Post";
import User from './pages/User';



const App = () => {
  return (
      <Router>
        <Switch>
          <PublicRoute exact component={Home} path={'/'} />
          <PublicRoute exact component={Post} path={'/posts/:id'} />
          <PublicRoute exact component={User} path={'/user/:id'} />
        </Switch>
      </Router>
  )
};

export default App;
