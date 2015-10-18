import React from 'react';
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = require('material-ui/lib/styles/colors');
var Faker = require('Faker');

var postTitle = Faker.Lorem.sentence();
var postDomain = Faker.Internet.domainName();

class Headline extends React.Component {
  render() {
    return (
      <span>{postTitle}</span> <span>{postDomain}</span>;
    );
  }
}

export default Headline;
