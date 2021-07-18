import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({
  avatar,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <div className="profile">
    <div className="description">
      <img
        width="100px"
        src={avatar}
        alt="Аватар пользователя"
        className="avatar"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers </span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views </span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes </span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
