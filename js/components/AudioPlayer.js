// components/Home.js
import React from 'react';
let Paper = require('material-ui/lib/paper');
let IconMenu = require('material-ui/lib/menus/icon-menu');
let IconButton = require('material-ui/lib/icon-button');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');
import FontIcon from 'material-ui/lib/font-icon';
let $ = require('jquery');
import 'nanoscroller/bin/javascripts/jquery.nanoscroller.js';
var playlistState = "";

var ItemActionMenu = React.createClass({
  render: function() {
    return (
      <IconMenu openDirection="bottom-left" iconButtonElement={<FontIcon className="material-icons">expand_more</FontIcon>}>
        <MenuItem primaryText="Info" leftIcon={<FontIcon className="material-icons">info-outline</FontIcon>}/>
        <MenuItem primaryText="Add to" className="playlist-menu-item" leftIcon={<span className="icon-etc-bookmark"></span>}/>
        <MenuItem primaryText="Favorite" className="playlist-menu-item" leftIcon={<span className="icon-etc-heart"></span>}/>
        <MenuItem primaryText="Share" className="playlist-menu-item" leftIcon={<span className="icon-etc-share2"></span>}/>
        <MenuItem primaryText="Remove" leftIcon={<FontIcon className="material-icons">delete</FontIcon>}/>
      </IconMenu>
    );
  }
});

var AudioPlayer = React.createClass({
// class AudioPlayer extends React.Component {

  getInitialState() {
    return {
      expandPlaylist: "playlist pl-closed nano",
      scrollTitle: "scrolling",
      expandCover: false,
      playingTrack: false,
    };
  },

  componentDidMount: function(){
		$(".nano").nanoScroller();
	},

  togglePlaylist() {
    if (this.state.expandPlaylist == "playlist pl-closed nano"){
      console.log('Toggling Playlist Open');
      this.setState({expandPlaylist: "playlist pl-open nano"});
      var playlistState = "playlist pl-open";
    }
    if (this.state.expandPlaylist == "playlist pl-open nano"){
      console.log('Toggling Playlist Closed');
      this.setState({expandPlaylist: "playlist pl-closed nano"});
      var playlistState = "playlist pl-closed";
    }
    return null;
  },

  render() {
    return (
      <Paper zDepth={2} className="audio-player">
        <div className="inner">
          <div className="left">

          <div className="audio-controls">
            <div className="button"><span className="icon-etc-first"></span></div>
            <div className="button"><span className="icon-etc-previous2"></span></div>
            <div className="button"><span className="icon-etc-play3"></span></div>
            <div className="button"><span className="icon-etc-next2"></span></div>
            <div className="button"><span className="icon-etc-last"></span></div>
          </div>

          <div className="audio-controls-secondary three-d-toggle-button">
            <span className="icon-etc-loop"></span>
            <span className="icon-etc-shuffle"></span>
          </div>



          </div>
          <div className="center">
                <div className="seekbar">
                  <div className="progress"></div>
                </div>
                <div className="time-display"><span>00:00/00:00</span></div>
          </div>
          <div className="right">


          <Paper zDepth={1} className="cover"><img src="http://lorempixel.com/54/54/abstract" className="image"/></Paper>
          <div className="track-info">
            <div className="playlist-toggle"><FontIcon className="material-icons" onClick={this.togglePlaylist}>expand_more</FontIcon></div>
              <span className="title"><span className={this.state.scrollTitle}>Columbian Necktie (DJ Bratty Kid Remix 2015)</span></span>
              <span className="artist">Renegade Beat</span>
              <div className="track-actions three-d-toggle-button">
                <span className="icon-etc-share2"></span>
                <span className="icon-etc-bookmark"></span>
                <span className="icon-etc-heart"></span>
              </div>
          </div>

          <Paper className={this.state.expandPlaylist}>
            <div className="items nano-content">
              <div className="item selected">
                <span className="number">01</span>
                <span className="title">Carnage In The Backseat</span>
                <span className="artist">5 Dollar Danger</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">02</span>
                <span className="title">Nuclear Procrastination</span>
                <span className="artist">Hot Self Defence</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">03</span>
                <span className="title">Uncontrollable Madman</span>
                <span className="artist">Missing Sanity</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">04</span>
                <span className="title">Sweet Ocean</span>
                <span className="artist">The New Assassins</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">05</span>
                <span className="title">Share The Lurrrve</span>
                <span className="artist">Chrome Devil</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">06</span>
                <span className="title">Good For Nothing Bomb</span>
                <span className="artist">Vortex Of War</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">02</span>
                <span className="title">Nuclear Procrastination</span>
                <span className="artist">Hot Self Defence</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">03</span>
                <span className="title">Uncontrollable Madman</span>
                <span className="artist">Missing Sanity</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">04</span>
                <span className="title">Sweet Ocean</span>
                <span className="artist">The New Assassins</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">05</span>
                <span className="title">Share The Lurrrve</span>
                <span className="artist">Chrome Devil</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">06</span>
                <span className="title">Good For Nothing Bomb</span>
                <span className="artist">Vortex Of War</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">02</span>
                <span className="title">Nuclear Procrastination</span>
                <span className="artist">Hot Self Defence</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">03</span>
                <span className="title">Uncontrollable Madman</span>
                <span className="artist">Missing Sanity</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">04</span>
                <span className="title">Sweet Ocean</span>
                <span className="artist">The New Assassins</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">05</span>
                <span className="title">Share The Lurrrve</span>
                <span className="artist">Chrome Devil</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
              <div className="item">
                <span className="number">06</span>
                <span className="title">Good For Nothing Bomb</span>
                <span className="artist">Vortex Of War</span>
                <span className="length">00:00</span>
                <div className="more"><ItemActionMenu /></div>
              </div>
            </div>
          </Paper>


          </div>
        </div>
      </Paper>
    );
  }
})

// export default AudioPlayer;
module.exports = AudioPlayer;
