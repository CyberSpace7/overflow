/** In this file, we create a React component which incorporates components provided by material-ui */
let React = require('react');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
//let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))();
let AppBar = require('material-ui/lib/app-bar');
let Colors = require('material-ui/lib/styles/colors');

let Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },

  render() {

    let containerStyle = {
      textAlign: 'center',
    };

    let standardActions = [
      { text: 'Okay' },
    ];

    return (
      <div style={containerStyle}>
      <AppBar
        title="Overflow"
        iconClassNameRight="muidocs-icon-navigation-expand-more" />

      </div>
    );
  },

});

module.exports = Main;
