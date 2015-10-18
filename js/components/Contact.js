'use strict';
var React = require('react/addons');
var GridLayout = require('./GridLayout');
/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
var Contact = React.createClass({
  render() {
    return (
      <GridLayout ref="gridlayout"/>
    );
  }
});

module.exports = Contact;
