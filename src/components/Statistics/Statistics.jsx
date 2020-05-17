import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const Statistics = ({ title, stats }) => (
  <section className={classNames(styles.statistics)}>
    {title && <h2 className={classNames(styles.title)}>{title}</h2>}
    <ul className={classNames(styles.list)}>
      {stats.map((stat) => (
        <li
          key={stat.id}
          className={classNames(styles.item)}
          style={{
            backgroundColor: `#${Math.floor(Math.random() * 1000)}`,
          }}
        >
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage + "%"}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
