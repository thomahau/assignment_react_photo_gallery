import React from 'react';
import { formatDate, formatCaption, getTags } from '../helpers/photo';

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
    comments
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
            <span className="glyphicon glyphicon-heart" /> {likes} &nbsp;
            <span className="glyphicon glyphicon-comment" /> {comments}
          </p>
          <p>Tags: {tagString}</p>
          <p>Filter: {filter}</p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
