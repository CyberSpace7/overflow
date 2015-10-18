import React from 'react';
import Router, { Route, RouteHandler, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';


let Top = React.createClass({
  render() {
    return (
      <div className="nav">
        <Main />
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

export default Top;
