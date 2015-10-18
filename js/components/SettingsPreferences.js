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

class SettingsPreferences extends React.Component {
  render() {
    return (
      <Paper zDepth={1} className="page settings">
        <div className="contents preferences">
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
        </div>
      </Paper>
    );
  }
}

export default SettingsPreferences;
