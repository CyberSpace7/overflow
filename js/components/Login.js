/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let RaisedButton = require('material-ui/lib/raised-button');
let Dialog = require('material-ui/lib/dialog');
let ThemeManager = new (require('material-ui/lib/styles/theme-manager'));
let Colors = require('material-ui/lib/styles/colors');
let FontIcon = require('material-ui/lib/font-icon');

let Login = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500,
    });
  },

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '200px',
    };

    let standardActions = [
      { text: 'Cancel' },
    ];

    return (
      <div style={containerStyle}>
        <Dialog
          title="Login"
          actions={standardActions}
          ref="superSecretPasswordDialog"
          contentStyle={{width: 350}}>
          <p>Please sign in</p>
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
          <RaisedButton label="Email Address" fullWidth={true} onTouchTap={this._handleTouchTap} labelColor="#0A5BC4">
            <FontIcon className="muidocs-icons-email button-login-icon" color="#0A5BC4"/>
          </RaisedButton>
          </div>
          </div>
          <p><a href="#">Sign using your email address</a></p>
        </Dialog>

        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />

      </div>
    );
  },
  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  },
});


module.exports = Login;
