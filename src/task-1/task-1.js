import React from "react";
import "./task-1.css";

class Stats extends React.Component {
  render() {
    return (
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{this.props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{this.props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{this.props.stats.likes}</span>
        </li>
      </ul>
    );
  }
}

export default class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="description">
          <img src={this.props.avatar} alt="user avatar" className="avatar" />
          <p className="name">{this.props.name}</p>
          <p className="tag">{"@" + this.props.tag}</p>
          <p className="location">{this.props.location}</p>
        </div>
        <Stats stats={this.props.stats} />
      </div>
    );
  }
}
