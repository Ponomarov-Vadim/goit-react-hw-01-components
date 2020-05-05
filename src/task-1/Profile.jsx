import React from "react";
import "./task-1.css";
// import PropTypes from "prop-types";

const Stats = ({ followers, views, likes }) => (
  <ul className="stats">
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
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="user avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{"@" + tag}</p>
      <p className="location">{location}</p>
    </div>
    <Stats stats={stats} />
  </div>
);

export default Profile;
