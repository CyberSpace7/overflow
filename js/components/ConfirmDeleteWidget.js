import React from 'react';
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Dialog = require('material-ui/lib/dialog');
let RaisedButton = require('material-ui/lib/raised-button');
let Colors = require('material-ui/lib/styles/colors');

let standardActions = [
  { text: 'Cancel' },
  { text: 'Submit', onTouchTap: this.onRemoveItem.bind(this, i), ref: 'submit' }
];

class ConfirmDeleteWidget extends React.Component {

  onRemoveItem(i) {
    console.log('removing', i);
    this.setState({items: _.reject(this.state.items, {i: i})});
  },

  render() {
    return (
      <Dialog
        title="Dialog With Standard Actions"
        actions={standardActions}
        actionFocus="submit"
        modal={this.state.modal}>
        The actions in this window are created from the json that's passed in.
      </Dialog>
    );
  }
}

export default ConfirmDeleteWidget;
