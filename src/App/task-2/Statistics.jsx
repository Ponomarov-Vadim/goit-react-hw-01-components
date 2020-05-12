import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const Stats = ({ id, label, percentage }) => (
  <li key={id} className={classNames(styles.item)}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage + "%"}</span>
  </li>
);

const Statistics = ({ title, stats }) => (
  <section className={classNames(styles.statistics)}>
    {title && <h2 className={classNames(styles.title)}>{title}</h2>}
    <ul className={classNames(styles.list)}>
      {stats.map((item) => Stats(item))}
    </ul>
  </section>
);

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
