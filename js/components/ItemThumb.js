// components/ItemThumb.js

import React from 'react';
import mui from 'material-ui';
import ImageLoader from 'react-imageloader';
var faker = require('faker');
var postImgUrl = faker.image.imageUrl();
var imgStyle = {
  display: 'inline-block',
  position: 'absolute',
  float: 'left',
  left: 16,
  height: 48 + 'px',
  width: 48 + 'px',
  overflow: 'hidden'
};
function preloader() {
  return <img src="images/spinner.gif" />;
}
function errorMessage() {
  return (
    <ImageLoader
      src="404.png"
      wrapper={React.DOM.div}
      preloader={preloader}>
      Image load failed!
    </ImageLoader>
  );
}
class ItemThumb extends React.Component {
  render() {
    return (
        <ImageLoader
          src={postImgUrl}
          wrapper={React.DOM.div}
          style={imgStyle}
          className="list-item-thumbnail"
          preloader={preloader}>
          {errorMessage()}
        </ImageLoader>
    );
  }
}

export default ItemThumb;
