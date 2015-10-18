'use strict';
var React = require('react/addons');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
let FloatingActionButton = require('material-ui/lib/floating-action-button');
let RaisedButton = require('material-ui/lib/raised-button');
let IconMenu = require('material-ui/lib/menus/icon-menu');
let IconButton = require('material-ui/lib/icon-button');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');
let Dialog = require('material-ui/lib/dialog');
let Snackbar = require('material-ui/lib/snackbar');
import FontIcon from 'material-ui/lib/font-icon';
/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
var GridEditToolbar = React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return {
      editMode: this.props.editMode,
      showWizard: false
    };
  },

  onStateChange: function() {
    var newState = {editMode: this.state.editMode, showWizard: this.state.showWizard};
    this.setState({newState});
    this.props.onChildStateChange(newState, wizState); // hey parent, I've changed!
    console.log("updated state with parent");
  },

  showWizard: function () {
    if (this.state.showWizard == false){
      console.log('Toggling Wizard On' + this.state.showWizard);
      this.setState({showWizard: true});
    }
    if (this.state.showWizard == true){
      console.log('Toggling Edit Mode Off');
      this.setState({showWizard: false});
    }
    return null;
  },

  render() {
    var defBgStyle = "default-background " + this.state.editMode;
    /*
    Check to see if editing is enabled
    */
    if (this.props.editMode == true) {
      var wizard = null;
      if (this.state.showWizard == true) {
        var wizard = <div className={defBgStyle}><div>Add your first widget by clicking +</div></div>;
      }
    return (
      <div>
      <FloatingActionButton onClick={this.props.onAddItem} style={{position: 'absolute', bottom: 10 + 'px', right: 10 + 'px'}}>
        <FontIcon className="material-icons">add</FontIcon>
      </FloatingActionButton>
      <div className="view-edit-toolbar">
        <div className="inner">
          <div className="button-horiz">
            <RaisedButton label="Cancel" onClick={this.props.editModeToggle}/>
          </div>
          <div className="button-horiz">
            <RaisedButton label="Save" className="button horiz" onClick={this.props.editSave} onChange={this.onStateChange} primary={true} />
          </div>
          <div className="divider"></div>
          <div className="button-horiz">
            <IconMenu openDirection="bottom-left" iconButtonElement={<FontIcon className="material-icons">expand_more</FontIcon>}>
            <MenuItem primaryText="Properties" leftIcon={<FontIcon className="material-icons">info-outline</FontIcon>}/>
            <MenuItem primaryText="Reset" onClick={this.resetLayout} leftIcon={<FontIcon className="material-icons">refresh</FontIcon>}/>
            <MenuItem primaryText="Wizard" onClick={this.showWizard} leftIcon={<FontIcon className="material-icons">refresh</FontIcon>}/>
            <MenuItem primaryText="Delete" leftIcon={<FontIcon className="material-icons">delete</FontIcon>}/>
            <MenuItem primaryText="Lock" leftIcon={<FontIcon className="material-icons">lock-open</FontIcon>}/>
            <MenuItem primaryText="Cancel" leftIcon={<FontIcon className="material-icons">block</FontIcon>}/>
            </IconMenu>
          </div>
        </div>
      </div>
      <Snackbar
        message="Event added to your calendar"
        action="close"
        ref="saveconfirm"
        autoHideDuration="1800"
        onActionTouchTap={this._handleAction}/>
      {wizard}
      </div>
    );
  }
  return (
    <div>
      <div className="view-edit-toolbar">
        <div className="inner">
          <RaisedButton label="Edit" className="button-editsave-off" onClick={this.props.editModeToggle}/>
        </div>
      </div>
    </div>
  );
  }
});

module.exports = GridEditToolbar;
