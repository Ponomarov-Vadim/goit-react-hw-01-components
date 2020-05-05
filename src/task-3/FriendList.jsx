import React from "react";
import "./task-3.css";

const friendCard = ({ isOnline, id, avatar, name }) => {
  const status = isOnline ? "online" : "offline";
  return (
    <li className="item" key={id}>
      <span className={"status " + status}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => (
  <ul className="friend-list">{friends.map((friend) => friendCard(friend))}</ul>
);

export default FriendList;
