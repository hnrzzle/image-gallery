import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import ImageThumbnails from '../albums/ImageThumbnails';
import ImageList from '../albums/ImageList';
import ImageGallery from '../albums/ImageGallery';

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
          <Route path="/albums/:id/images/thumbnail" render={({ match }) => {return <ImageThumbnails albumId={match.params.id} />;}}/>
          <Route path="/albums/:id/images/list" render={() => {return <ImageList />;}}/>
          <Route path="/albums/:id/images/gallery" render={() => {return <ImageGallery />;}}/>
          <Redirect to="/albums/:id/images/thumbnail" />
        </Switch>

      </div>
    );
  }
}