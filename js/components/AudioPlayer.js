// components/Home.js
import React from 'react';
let Paper = require('material-ui/lib/paper');
let IconMenu = require('material-ui/lib/menus/icon-menu');
let IconButton = require('material-ui/lib/icon-button');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');
import FontIcon from 'material-ui/lib/font-icon';
var playlistState = "playlist pl-closed";

class AudioPlayer extends React.Component {

  getInitialState() {
    return {
      expandPlaylist: false,
      expandCover: false,
      playingTrack: false,
    };
  }

  togglePlaylist() {
    if (this.state.expandPlaylist == false){
      console.log('Toggling Wizard On' + this.state.expandPlaylist);
      this.setState({expandPlaylist: true});
      var playlistState = "playlist pl-open";
    }
    if (this.state.expandPlaylist == true){
      console.log('Toggling Edit Mode Off');
      this.setState({expandPlaylist: false});
      var playlistState = "playlist pl-closed";
    }
    return null;
  }

  render() {
    this.togglePlaylist = this.togglePlaylist.bind(this)
    return (
      <Paper zDepth={2} className="audio-player">
        <div className="inner">
          <Paper zDepth={1} className="cover"><img src="http://lorempixel.com/54/54/abstract" className="image"/></Paper>
          <div className="track-info">
              <span className="title">Track Title</span>
              <span className="artist">Artist</span>
          </div>
          <div className="player">
            <div className="button"><span className="icon-etc-first"></span></div>
            <div className="button"><span className="icon-etc-backward2"></span></div>
            <div className="button"><span className="icon-etc-play3"></span></div>
            <div className="button"><span className="icon-etc-forward3"></span></div>
            <div className="button"><span className="icon-etc-last"></span></div>
          </div>
          <Paper className={playlistState}>
            <div className="expand" onClick={this.togglePlaylist}>⌐</div>
            <div className="item selected">
              <span className="number">01</span>
              <span className="title">Audio Track Title</span>
              <span className="artist">Audio Track Artist</span>
              <span className="length">Length</span>
              <div className="more">
              <IconMenu openDirection="top-left" iconButtonElement={<FontIcon className="material-icons">expand_more</FontIcon>}>
              <MenuItem primaryText="Properties" leftIcon={<FontIcon className="material-icons">info-outline</FontIcon>}/>
              <MenuItem primaryText="Reset" onClick={this.resetLayout} leftIcon={<FontIcon className="material-icons">refresh</FontIcon>}/>
              <MenuItem primaryText="Wizard" onClick={this.showWizard} leftIcon={<FontIcon className="material-icons">refresh</FontIcon>}/>
              <MenuItem primaryText="Delete" leftIcon={<FontIcon className="material-icons">delete</FontIcon>}/>
              <MenuItem primaryText="Lock" leftIcon={<FontIcon className="material-icons">lock-open</FontIcon>}/>
              <MenuItem primaryText="Cancel" leftIcon={<FontIcon className="material-icons">block</FontIcon>}/>
              </IconMenu>
              </div>
            </div>
            <div className="item">
              <span className="number">02</span>
              <span className="title">Audio Track Title</span>
              <span className="artist">Audio Track Artist</span>
              <span className="length">Length</span>
              <div className="more"><span>.</span></div>
            </div>
            <div className="item">
              <span className="number">03</span>
              <span className="title">Audio Track Title</span>
              <span className="artist">Audio Track Artist</span>
              <span className="length">Length</span>
              <div className="more"><span>.</span></div>
            </div>
            <div className="item">
              <span className="number">04</span>
              <span className="title">Audio Track Title</span>
              <span className="artist">Audio Track Artist</span>
              <span className="length">Length</span>
              <div className="more"><span>.</span></div>
            </div>
            <div className="item">
              <span className="number">05</span>
              <span className="title">Audio Track Title</span>
              <span className="artist">Audio Track Artist</span>
              <span className="length">Length</span>
              <div className="more"><span>.</span></div>
            </div>
            <div className="item">
              <span className="number">06</span>
              <span className="title">Audio Track Title</span>
              <span className="artist">Audio Track Artist</span>
              <span className="length">Length</span>
              <div className="more"><span>.</span></div>
            </div>
          </Paper>
        </div>
      </Paper>
    );
  }
}

export default AudioPlayer;
