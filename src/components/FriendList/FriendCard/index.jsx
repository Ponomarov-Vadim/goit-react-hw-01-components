import React from "react";
import styles from "./FriendCard.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const FriendCard = ({ isOnline, avatar, name }) => (
  <li className={classNames(styles.item)}>
    <span
      className={classNames(styles.status, isOnline ? styles.online : "")}
    ></span>
    <img className={classNames(styles.avatar)} src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendCard.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendCard;
