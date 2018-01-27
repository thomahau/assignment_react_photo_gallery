import React from 'react';

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
  return (
    <div className="col-sm-4">
      <div className="thumbnail">
        <a href={photoHref}>
          <img src={src} alt="" className="img-responsive" />
        </a>
        <div className="caption">
          <h4>
            <a href={userHref}>{username}</a>
            <small>{createdAt}</small>
          </h4>
          <p>{caption}</p>
          <p>Tags:</p>
          <p>Filter: {filter}</p>
          <p>
            <span className="glyphicon glyphicon-heart" /> {likes} &nbsp;
            <span className="glyphicon glyphicon-comment" /> {comments}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
