'use strict';
var React = require('react/addons');
var classNames = require( 'classnames' );
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var _ = require('lodash');
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
let Paper = require('material-ui/lib/paper');
let RaisedButton = require('material-ui/lib/raised-button');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');
import FontIcon from 'material-ui/lib/font-icon';
let IconMenu = require('material-ui/lib/menus/icon-menu');
let IconButton = require('material-ui/lib/icon-button');
let Dialog = require('material-ui/lib/dialog');
let FloatingActionButton = require('material-ui/lib/floating-action-button');
let GridEditToolbar = require('./GridEditToolbar');

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
var GridLayout = React.createClass({
  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: "layout",
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 100,
      isDraggable: true,
      isResizable: true,
    };
  },

  getInitialState() {
    return {
      items: [0].map(function(i, key, list) {
        return {i: 0, x: i * 2, y: 0, w: 1, h: 1, static: true, newWiz: false, editMode: false, className: 'add-item', add: i === list.length - 1};
      }),
      newCounter: 0,
      defaultItem: 'visible',
      editMode: false,
      showWizard: false,
    };
  },

  hideDefault: function () {
    console.log('hiding', 0);
    this.setState({defaultItem: 'hidden'});
  },

  unhideDefault: function () {
    console.log('unhiding', 0);
    this.setState({defaultItem: ''});
  },

  onAddItem() {
    var iter = this.state.newCounter + 1;
    console.log('adding', iter);
    var init = this.state.items.length;
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: iter,
        x: this.state.items.length * 2 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
        showWizard: this.state.showWizard,
        editMode: this.state.editMode,
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: iter,
    });
    if (init === 1) {
      console.log('going to hide default ', this.state.items);
      this.hideDefault();
    }
  },

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  },

  onLayoutChange(layout) {
    //this.props.onLayoutChange(layout);
    this.setState({layout: layout});
  },

  // editConfirm() {
  //     let standardActions = [
  //       { text: 'Cancel' },
  //       { text: 'OK', onTouchTap: this.editMode, ref: 'submit' }
  //     ];
  //     console.log('confirming edit mode');
  //     //this.setState({isDraggable: false, isResizable: false});
  //     <Dialog ref="dialog" title="Dialog With Standard Actions" actions={standardActions} actionFocus="submit" modal={this.state.modal}>
  //       The actions in this window are created from the json that's passed in.
  //     </Dialog>
  // },

  // editMode() {
  //     console.log('disabling edit mode');
  //     //this.setState({isDraggable: false, isResizable: false});
  // },

  onRemoveItem(i) {
    console.log('removing', i);
    this.setState({items: _.reject(this.state.items, {i: i})});
    if (this.state.items.length <= 2) {
      console.log('going to unhide ', this.state.items);
      this.unhideDefault();
    }
  },

  resetLayout: function resetLayout() {
    this.setState({ layout: [] });
  },

  itemOpts(i) {
      console.log('editMode state (itemOpts): ', this.state.editMode);
      if (this.state.editMode == true) {
        return (
          <div>
            <IconMenu openDirection="bottom-left" iconButtonElement={<FontIcon className="material-icons">more_vert</FontIcon>}>
              <MenuItem primaryText="Options"/>
              <MenuItem primaryText="Lock"/>
              <MenuItem primaryText="Remove" onClick={this.onRemoveItem.bind(this, i)}/>
            </IconMenu>
          </div>
        );
      }
      if (this.state.editMode == false) {
        return null;
      }
      return null;
  },

  onChildStateChange: function(newState, wizState) {
    console.log('changing parent state ', newState);
    this.setState({editMode: newState, showWizard: wizState});
  },


//MAKE TWO COMPONENTS FOR THIS
  createElement(el) {
    var i = el.add ? '0' : el.i;
    var editVis = "remove react-removable " + this.state.editMode;
    return (
      el.add ?
          <Paper zDepth={2} key={i} _grid={el} className={this.state.defaultItem}>
          <div key={i} _grid={el} className={i}>
          <div className="add-item-text-container">
          <span className="add-item-text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">{i} Add +</span>
          </div></div></Paper>
        : <Paper zDepth={2} key={i} _grid={el}>
        <div key={i} _grid={el} className={i}>
        <div className="widget-content-container">
        <div className="widget-content-titlebar">
        <span className="widget-content-title">A Moderate length Widget Title</span></div>
        <div className="widget-content">
        <span className="text">{i}</span>
        </div>
        </div>
        {this.itemOpts(i)}
      </div>
      </Paper>
    );
  },

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <div style={{margin: 10 + 'px'}}>
        <GridEditToolbar ref="gridedittoolbar" onChildStateChange={this.onChildStateChange}/>
        <ResponsiveReactGridLayout ref="resgridlayout" className={this.props.showWizard} onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}
            {...this.props} {...this.state}>
          {_.map(this.state.items, this.createElement)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
});

module.exports = GridLayout;
