import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const Stats = ({ followers, views, likes }) => (
  <ul className={classNames(styles.stats)}>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
);

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
    <Stats
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}
    />
  </div>
);

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
