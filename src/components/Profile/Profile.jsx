import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={classNames(styles.profile)}>
    <div className={classNames(styles.description)}>
      <img
        src={avatar}
        alt="user avatar"
        className={classNames(styles.avatar)}
      />
      <p className="name">{name}</p>
      <p className="tag">{"@" + tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={classNames(styles.stats)}>
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;

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
