// components/About.js
import React from 'react';
var {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} = React;
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Avatar = require('material-ui/lib/avatar');
let List = require('material-ui/lib/lists/list');
let ListItem = require('material-ui/lib/lists/list-item');
let ListDivider = require('material-ui/lib/lists/list-divider');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');
let IconMenu = require('material-ui/lib/menus/icon-menu');
let IconButton = require('material-ui/lib/icon-button');
import FontIcon from 'material-ui/lib/font-icon';
let Colors = require('material-ui/lib/styles/colors');
var faker = require('faker');
import ItemThumb from './../../js/components/ItemThumb';


var userRealname = faker.name.findName();
var userUsername = faker.internet.userName();
var postTitle = faker.company.catchPhrase();
var postDomain = faker.internet.domainName()
var postCat = faker.company.bs();
var postCo = faker.company.companyName();
var postPreview = faker.hacker.phrase() +  '. ' + faker.hacker.phrase();
var postText = faker.lorem.paragraphs();
var postImgUrl = faker.image.imageUrl();
var postTime = faker.date.recent(1);
var postNum1 = faker.random.number();
var postNum2 = faker.random.number();
var postNum3 = faker.random.number();


var Headline = React.createClass({
  render: function() {
    return (
      <div className="listItemHeadline" style={{marginTop: 0, paddingTop: 0}}>
        <span className="listItemTitle">{postTitle}</span>
        <span className="listItemDomain">({postDomain})</span><br />
        <span className="listItemSubtitle"> Posted <i>yesterday</i> by <emphasis>{userUsername}</emphasis> to <b>{postCo}</b></span>
      </div>
    );
  }
});



var ListItemMenu = React.createClass({
  render: function() {
    return (
      <IconMenu openDirection="bottom-left" style={{position: 'absolute', top: 0, right: 4 + 'px'}} iconButtonElement={<FontIcon className="material-icons">expand_more</FontIcon>}>
        <MenuItem primaryText="Comments" leftIcon={<FontIcon className="material-icons">forum</FontIcon>}/>
        <MenuItem primaryText="Save" leftIcon={<FontIcon className="material-icons">grade</FontIcon>}/>
        <MenuItem primaryText="Share" leftIcon={<FontIcon className="material-icons">share</FontIcon>}/>
        <MenuItem primaryText="Mark as Read" leftIcon={<FontIcon className="material-icons">done</FontIcon>}/>
        <MenuItem primaryText="Hide" leftIcon={<FontIcon className="material-icons">block</FontIcon>}/>
      </IconMenu>
    );
  }
});

class About extends React.Component {
  render() {
    return (
      <List subheader="Today">
        <ListItem
          leftAvatar={<ItemThumb />}
          rightIconButton={<ListItemMenu />}
          primaryText={<Headline />}
          secondaryText={
            <div style={{marginTop: 0, paddingTop: 0}}>
              <div className="list-item-preview"><span className="list-item-preview-text">{postPreview}</span></div><div style={{display: "inline-block", position: "relative", float: "right", bottom: 18 + "px"}}><span><b>...</b></span></div>
              <div className="list-item-meta"><span className="list-item-meta-comments"><b>{postNum1} comments</b></span></div>
            </div>
          }
          secondaryTextLines={2} />
        <ListDivider inset={false} />
        <ListItem
          leftAvatar={<Avatar src={postImgUrl} />}
          rightIcon={<ListItemMenu />}
          primaryText="me, Scott, Jennifer"
          secondaryText={
            <p>
              <span style={{color: Colors.darkBlack}}>Summer BBQ</span><br/>
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
          secondaryTextLines={2} />
        <ListDivider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
          rightIcon={<ListItemMenu />}
          primaryText="Grace Ng"
          secondaryText={
            <p>
              <span style={{color: Colors.darkBlack}}>Oui oui</span><br/>
              Do you have any Paris recs? Have you ever been?
            </p>
          }
          secondaryTextLines={2} />
        <ListDivider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="images/kerem-128.jpg" />}
          rightIcon={<ListItemMenu />}
          primaryText="Kerem Suer"
          secondaryText={
            <p>
              <span style={{color: Colors.darkBlack}}>Birthday gift</span><br/>
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
          secondaryTextLines={2} />
        <ListDivider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
          rightIcon={<ListItemMenu />}
          primaryText="Raquel Parrado"
          secondaryText={
            <p>
              <span style={{color: Colors.darkBlack}}>Recipe to try</span><br/>
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
          secondaryTextLines={2} />
      </List>
    );
  }
}

export default About;
