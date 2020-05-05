import React from "react";
import "./task-3.css";

function friendCard(friendInfo) {
  const status = friendInfo.isOnline ? "online" : "offline";
  return (
    <li className="item" key={friendInfo.id}>
      <span className={"status " + status}></span>
      <img className="avatar" src={friendInfo.avatar} alt="" width="48" />
      <p className="name">{friendInfo.name}</p>
    </li>
  );
}

export default class FriendList extends React.Component {
  render() {
    return (
      <ul className="friend-list">
        {this.props.friends.map((friend) => friendCard(friend))}
      </ul>
    );
  }
}
