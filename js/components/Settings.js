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

let optionsTimeFormat = [
   { payload: '1', text: '12/31/2016 (Default)' },
   { payload: '2', text: '31/12/2016' },
   { payload: '3', text: '2016/12/31' },
   { payload: '4', text: '2016/31/12' },
];

class Settings extends React.Component {
  render() {
    return (
      <Paper zDepth={1} className="page settings">
        <div className="contents profile">
          <div className="cols">
            <h2>Profile</h2>
            <div className="left">
              <TextField hintText="Display Name" className="settings-field" errorText="Required"/><br />
              <TextField hintText="Email Address" className="settings-field" errorText="Required"/><br />
              <TextField hintText="Location" className="settings-field"/><br />
              <DatePicker hintText="Birthdate" />
              <RaisedButton label="Reset Password" labelColor="#ff0000" />
            </div>
            <div className="right">
              <div className="avatar">
                <Avatar src="images/raquelromanp-128.jpg" size={128} className="center-h"/><br />
                <FlatButton label="Change Avatar" className="center-h"/><br />
              </div>
              <div className="social-links">
                <h3>Profile Links</h3>
                <span>These links will appear on your profile</span>
                <div className="social-link-checkboxes">
                  <div className="social-link-option"><Checkbox name="checkboxName1" value="checkboxValue1" label="f"/></div>
                  <div className="social-link-option"><Checkbox name="checkboxName1" value="checkboxValue1" label="t"/></div>
                  <div className="social-link-option"><Checkbox name="checkboxName1" value="checkboxValue1" label="tu"/></div>
                </div>
                <TextField hintText="Additional Link 1" className="settings-field"/><br />
                <TextField hintText="Additional Link 2" className="settings-field"/>
              </div>
            </div>
            <div className="savebar">
              <RaisedButton label="Cancel" />
              <RaisedButton label="Save" secondary={true} />
            </div>
          </div>
          <div className="cols">
              <h2>Preferences</h2>
              <div className="left">
              <h3>Date Format</h3>
            <DropDownMenu menuItems={optionsTimeFormat} />
            </div>
            <div className="right">
              <Toggle name="optionsPushNotify" value="toggleValue1" label="Push Notifications"/>
              <Toggle name="optionsHandleRSS" value="toggleValue1" label="Handle RSS/Atom Links"/>
              <Toggle name="optionsHandlePodcasts" value="toggleValue1" label="Handle Podcast Links"/>
            </div>
            <div className="savebar">
              <RaisedButton label="Cancel" />
              <RaisedButton label="Save" secondary={true} />
            </div>
          </div>
          <div className="cols">
            <h2>Appearance</h2>
            <div className="left">
              <h3>Theme</h3>
              <DropDownMenu menuItems={optionsThemes} />
            </div>
            <div className="right">
              <h3>Font Size</h3>
              <div className="settings-slider">
                <Slider name="slider2" defaultValue={0.50} step={0.25} />
              </div>
            </div>
            <div className="savebar">
              <RaisedButton label="Cancel" />
              <RaisedButton label="Save" secondary={true} />
            </div>
          </div>
          <div className="settings-connections">
            <h2>Connections</h2>
            <RaisedButton label="Change Password" labelColor="#ff0000" /><br />
            <RaisedButton label="Change Password" labelColor="#ff0000" /><br />
            <RaisedButton label="Change Password" labelColor="#ff0000" /><br />
            <RaisedButton label="Change Password" labelColor="#ff0000" />
            <div className="savebar">
              <RaisedButton label="Cancel" />
              <RaisedButton label="Save" secondary={true} />
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Settings;
