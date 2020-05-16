import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import FriendCard from "./FriendCard";

const FriendList = ({ friends }) => (
  <ul className={classNames(styles.friendList)}>
    {friends.map((friend) => {
      return (
        <FriendCard
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      );
    })}
  </ul>
);

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
