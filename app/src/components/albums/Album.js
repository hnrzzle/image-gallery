import React, { Component } from 'react';

export default class Album extends Component {
  render() {
    return (
      <li>
        <img src="http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg"/>
        <h2>Album Title</h2>
      </li>
    );
  }
}