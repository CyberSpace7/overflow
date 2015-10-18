/** List Item Thumnail Component */

let React = require('react');
let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))();
var Faker = require('Faker');
var postThumb = Faker.Image.imageUrl();

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

class ItemThumb extends React.Component {
  render() {
    return (
      <Image source={postThumb} />
    );
  }
}

},

_handleTouchTap() {
  this.refs.superSecretPasswordDialog.show();
},

});

module.exports = itemThumb;
