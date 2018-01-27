import React, { Component } from 'react';
import Photo from './Photo';
import data from '../photos';

class Gallery extends Component {
  render() {
    const photoPanels = data.map(photo => {
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
    return <div className="row">{photoPanels}</div>;
  }
}

export default Gallery;
