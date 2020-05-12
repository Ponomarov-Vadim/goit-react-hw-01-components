import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const FriendCard = ({ isOnline, id, avatar, name }) => {
  console.log(isOnline);
  return (
    <li className={classNames(styles.item)}>
      <span
        className={classNames(styles.status, isOnline ? styles.online : "")}
      ></span>
      <img
        className={classNames(styles.avatar)}
        src={avatar}
        alt=""
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => (
  <ul key="1234" className={classNames(styles.friendList)}>
    {friends.map((friend) => (
      <FriendCard
        key={friend.id}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
        name={friend.name}
      />
    ))}
  </ul>
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
