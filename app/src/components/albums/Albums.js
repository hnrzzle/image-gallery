import React, { Component } from 'react';
import Album from './Album';

export default class Albums extends Component {
  render() {

    // const { albums } = this.props;

    return (
      <div>
        <h2>Hello</h2>
        {/* {albums.map((album, i) => (
          <Album key={i} album={album}/>
        ))} */}
      </div>
    );
  }
}