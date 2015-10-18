import React from 'react';
import mui from 'material-ui';
let Avatar = mui.Avatar;

class leftNavHeader extends React.Component {
  render() {
    return (
      <div className="left-nav-acct">
        <Avatar src="./images/raquelromanp-128.jpg" />
      </div>
    );
  }
}

export default leftNavHeader;
