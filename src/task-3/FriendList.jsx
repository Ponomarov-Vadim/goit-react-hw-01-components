import React from "react";
import "./FriendList.css";
import PropTypes from "prop-types";

const friendCard = ({ isOnline, id, avatar, name }) => {
  const status = isOnline ? "online" : "offline";
  return (
    <li key={id} className="item">
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
