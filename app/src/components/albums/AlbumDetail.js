import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import AlbumThumbnails from '../albums/AlbumThumbnails';
import AlbumList from '../albums/AlbumList';
import AlbumGallery from '../albums/AlbumGallery';

export default class Album extends Component {
  render() {
    return (
      <div>
        <h3>Album Title</h3>
      
        <ul>
          <li><Link to="/albums/:id/images/thumbnail">Thumbnails</Link></li>
          <li><Link to="/albums/:id/images/list">List</Link></li>
          <li><Link to="/albums/:id/images/gallery">Gallery</Link></li>
        </ul>

        <Switch>
          <Route path="/albums/:id/images/thumbnail" render={() => {return <AlbumThumbnails />;}}/>
          <Route path="/albums/:id/images/list" render={() => {return <AlbumList />;}}/>
          <Route path="/albums/:id/images/gallery" render={() => {return <AlbumGallery />;}}/>
          <Redirect to="/albums/:id/images/thumbnail" />
        </Switch>

      </div>
    );
  }
}