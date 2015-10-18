// components/Home.js
import React from 'react';
let Paper = require('material-ui/lib/paper');
let Tabs = require('material-ui/lib/tabs');
let Tab = require('material-ui/lib/tabs/tab');
let Avatar = require('material-ui/lib/avatar');
let DropDownMenu = require('material-ui/lib/drop-down-menu');
let RaisedButton = require('material-ui/lib/raised-button');
let FlatButton = require('material-ui/lib/flat-button');
let Checkbox = require('material-ui/lib/checkbox');
let Toggle = require('material-ui/lib/toggle');
let Dialog = require('material-ui/lib/dialog');
let Snackbar = require('material-ui/lib/snackbar');
let TextField = require('material-ui/lib/text-field');
let DatePicker = require('material-ui/lib/date-picker/date-picker');
let Slider = require('material-ui/lib/slider');
import FontIcon from 'material-ui/lib/font-icon';

let optionsThemes = [
   { payload: '1', text: 'Light (Default)' },
   { payload: '2', text: 'Dark' },
   { payload: '3', text: 'Awake' },
   { payload: '4', text: 'Neon Nights' },
];

class SettingsConnections extends React.Component {
  render() {
    return (
      <Paper zDepth={1} className="page settings">
        <div className="contents connections">
            <h2>Connections</h2>
            <div className="buttons-login-stacked">
            <div className="button-vert">
            <RaisedButton label="Google" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#D50F25" labelColor="#fff">
              <img src="./images/google.png" className="button-login-icon"/>
            </RaisedButton>
            </div>
            <div className="button-vert">
            <RaisedButton label="Facebook" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#3b5998" labelColor="#fff">
              <FontIcon className="material-icons button-login-icon" color="#fff">home</FontIcon>
            </RaisedButton>
            </div>
            <div className="button-vert">
            <RaisedButton label="Twitter" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#4099FF" labelColor="#fff">
              <FontIcon className="material-icons button-login-icon" color="#fff">home</FontIcon>
            </RaisedButton>
            </div>
            <div className="button-vert">
            <RaisedButton label="Instagram" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#fffec3" labelColor="#3f729b">
              <FontIcon className="material-icons button-login-icon" color="#3f729b">home</FontIcon>
            </RaisedButton>
            </div>
            <div className="button-vert">
            <RaisedButton label="Tumblr" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#4099FF" labelColor="#fff">
              <FontIcon className="material-icons button-login-icon" color="#fff">home</FontIcon>
            </RaisedButton>
            </div>
            <div className="button-vert">
            <RaisedButton label="Instapaper" fullWidth={true} onTouchTap={this._handleTouchTap}>
              <FontIcon className="material-icons button-login-icon">home</FontIcon>
            </RaisedButton>
            </div>
            </div>
            <div className="savebar">
              <RaisedButton label="Cancel" />
              <RaisedButton label="Save" secondary={true} />
            </div>
          </div>
      </Paper>
    );
  }
}

export default SettingsConnections;
