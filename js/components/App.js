// components/App.js

import React from 'react';
import mui from 'material-ui';
import { RouteHandler } from 'react-router';

// Get mui Components
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem
  , MenuDivider = mui.MenuDivider
  , Avatar = mui.Avatar;
let leftNavHeader = require('./leftNavHeader');

// var lnhChild01 =  React.createElement('img', { src: "./images/raquelromanp-128.jpg"} );
// var leftNavHeader =  React.createElement('div', { className: 'left-nav-header'}, lnhChild01 );


let menuItems = [
  { route: '/', text: 'Home' },
  { route: 'login', text: 'Login' },
  { route: 'layoutgrid', text: 'LayoutGrid' },
  { route: 'about', text: 'List' },
  { type: MenuItem.Types.SUBHEADER, text: 'Options' },
  { route: 'settings', text: 'Settings' },
  { route: 'profile', text: 'Profile' },
  { route: 'preferences', text: 'Preferences' },
  { route: 'appearance', text: 'Appearance' },
  { route: 'connections', text: 'Connections' },
  { route: 'audioplayer', text: 'Audio Player' },
  { route: 'logout', text: 'Log Out' }
];

class App extends React.Component {

  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
      // muiTheme: ThemeManager.getMuiTheme(dark-theme)
    };
  }

  _handleClick(e) {
    e.preventDefault();

    this.refs.leftNav.toggle();
  }

  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) {
        return i;
      }
    }
  }



  // leftMenuItems() {
  //   // Define menu items for LeftNav
  //   if (typeof AppBar === 'undefined' || AppBar === null){
  //     let menuItems = [
  //       { route: '/', text: 'Home' },
  //       { route: 'login', text: 'Login' },
  //     ];
  //     return menuItems;
  //   }
  //   let menuItems = [
  //     { route: '/', text: 'Home' },
  //     { route: 'login', text: 'Login' },
  //     { route: 'layoutgrid', text: 'LayoutGrid' },
  //     { route: 'about', text: 'List' },
  //     { type: MenuItem.Types.SUBHEADER, text: 'Options' },
  //     { route: 'settings', text: 'Settings' },
  //     { route: 'logout', text: 'Log Out' },
  //   ];
  //   return menuItems;
  // }

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  render() {

    return (
      <div id="page_container">

        <LeftNav
          ref="leftNav"
          docked={false}
          header={<leftNavHeader />}
          menuItems={menuItems}
          selectedIndex={this._getSelectedIndex()}
          onChange={this._onLeftNavChange} />

        <header>
          <AppBar title='Overflow' onLeftIconButtonTouchTap={this._handleClick} />
        </header>

        <section className="content">
          <RouteHandler className="left-nav"/>
        </section>

      </div>
    );
  }

}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

App.contextTypes = {
  router: React.PropTypes.func
};

module.exports = App;
