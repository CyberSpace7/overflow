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
            <div className="cols">
              <div className="left">
                <h3>Accounts</h3>
                <div className="buttons-login-stacked">
                  <div className="button-vert">
                  <RaisedButton label="Google" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#D50F25" labelColor="#fff">
                    <span className="icon-cxn-google icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Facebook" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#3b5998" labelColor="#fff">
                    <span className="icon-cxn-facebook icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Twitter" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#4099FF" labelColor="#fff">
                    <span className="icon-cxn-twitter icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="reddit" fullWidth={true} onTouchTap={this._handleTouchTap}>
                    <span className="icon-cxn-reddit icon-cxn-button black"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Soundcloud" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#ff3300" labelColor="#fff">
                    <span className="icon-cxn-soundcloud icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Github" fullWidth={true} onTouchTap={this._handleTouchTap}>
                    <span className="icon-cxn-github4 icon-cxn-button black"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="RSS/Atom" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#f26522" labelColor="#fff">
                    <span className="icon-cxn-feed2 icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="YouTube" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#cd201f" labelColor="#fff">
                    <span className="icon-cxn-youtube2 icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Vimeo" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#1ab7ea" labelColor="#fff">
                    <span className="icon-cxn-vimeo icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Twitch" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#6441a5" labelColor="#fff">
                    <span className="icon-cxn-twitch icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Flickr" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#0063dc" labelColor="#ff0084">
                    <span className="icon-cxn-flickr2 icon-cxn-button flickr-pink"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Dribbble" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#ea4c89" labelColor="#fff">
                    <span className="icon-cxn-dribbble icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Forrst" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#5b9a68" labelColor="#fff">
                    <span className="icon-cxn-forrst icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="DeviantArt" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#05cc47" labelColor="#000">
                    <span className="icon-cxn-deviantart icon-cxn-button black"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="StumbleUpon" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#eb4924" labelColor="#fff">
                    <span className="icon-cxn-stumbleupon2 icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Podcast" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#eb4924" labelColor="#fff">
                    <span className="icon-etc-mic icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="ello" fullWidth={true} onTouchTap={this._handleTouchTap}>
                    <span className="icon-cxn-ello icon-cxn-button black"></span>
                  </RaisedButton>
                </div>
              </div>
            </div>
            <div className="right">
              <h3>Sharing</h3>
              <div className="buttons-login-stacked">
                <div className="button-vert">
                  <RaisedButton label="Instagram" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#3f729b" labelColor="#fff">
                    <span className="icon-cxn-instagram icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Tumblr" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#35465c" labelColor="#fff">
                    <span className="icon-cxn-tumblr icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Pinterest" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#bd081c" labelColor="#fff">
                    <span className="icon-cxn-pinterest icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="last.fm" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="rgba(213, 16, 7, 1)" labelColor="#fff">
                    <span className="icon-cxn-lastfm icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
              </div>
              <h3>Saving</h3>
              <div className="buttons-login-stacked">
                <div className="button-vert">
                  <RaisedButton label="Pocket" fullWidth={true} onTouchTap={this._handleTouchTap} backgroundColor="#ef4056" labelColor="#fff">
                    <span className="icon-etc-bookmark icon-cxn-button white"></span>
                  </RaisedButton>
                </div>
                <div className="button-vert">
                  <RaisedButton label="Instapaper" fullWidth={true} onTouchTap={this._handleTouchTap}>
                    <span className="icon-etc-bookmark icon-cxn-button black"></span>
                  </RaisedButton>
                </div>
              </div>
            </div>
            </div>
            <div className="savebar">
              <div className="button-horiz">
                <RaisedButton label="Cancel" />
              </div>
              <div className="button-horiz">
                <RaisedButton label="Save" secondary={true} />
              </div>
            </div>
          </div>
      </Paper>
    );
  }
}

export default SettingsConnections;
