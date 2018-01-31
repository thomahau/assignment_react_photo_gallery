import React, { Component } from 'react';
import Photo from './Photo';
import Alert from './elements/Alert';
// import data from '../photos';
import { filterByFilter, paginatePhotos } from '../helpers/gallery';

const PANELS_PER_PAGE = 6;

class Gallery extends Component {
  render() {
    const { igFilter, searchQuery, page } = this.props;
    let { photos } = this.props;
    photos = filterByFilter(photos, igFilter);
    //more filters here
    const resultCount = photos.length;
    photos = paginatePhotos(photos, page, PANELS_PER_PAGE);

    const photoPanels = photos.map(photo => {
      let caption;
      if (photo.caption && photo.caption.text) {
        caption = photo.caption.text;
      } else {
        caption = '';
      }

      return (
        <Photo
          key={photo.id}
          src={photo.images.low_resolution.url}
          photoHref={photo.link}
          userHref={`https://www.instagram.com/${photo.user.username}/`}
          username={photo.user.username}
          createdAt={photo.created_time}
          caption={caption}
          tags={photo.tags}
          filter={photo.filter}
          likes={photo.likes.count}
          comments={photo.comments.count}
        />
      );
    });
    return (
      <div className="row">
        <Alert>{`${resultCount} results`}</Alert>
        {photoPanels}
      </div>
    );
  }
}

export default Gallery;
