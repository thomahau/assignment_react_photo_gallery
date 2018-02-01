import React from 'react';
// import SortableIcon from './SortableIcon';
import { formatDate, formatCaption, getTags } from '../helpers/photos';

const Photo = props => {
  const {
    src,
    photoHref,
    userHref,
    username,
    createdAt,
    caption,
    tags,
    filter,
    likes,
    comments,
    onIconClick
  } = props;
  const date = formatDate(createdAt);
  const formattedCaption = formatCaption(caption);
  const tagString = getTags(tags);

  return (
    <div className="col-sm-4">
      <div className="thumbnail">
        <a href={photoHref}>
          <img src={src} alt="" className="img-responsive" />
        </a>
        <div className="caption">
          <h4>
            <a href={userHref}>{username}</a>&nbsp;
            <small>{date}</small>
          </h4>
          <p>{formattedCaption}</p>
          <p>
            <span
              className="glyphicon glyphicon-heart"
              onClick={onIconClick}
              role="button"
            />{' '}
            {likes} &nbsp;
            <span
              className="glyphicon glyphicon-comment"
              onClick={onIconClick}
              role="button"
            />{' '}
            {comments}
          </p>
          <p>Filter: {filter}</p>
          <p>Tags: {tagString}</p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
