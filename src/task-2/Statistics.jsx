import React from "react";
import "./Statistics.css";
import PropTypes from "prop-types";

const Stats = ({ id, label, percentage }) => (
  <li key={id} className="list-item">
    <span className="label">{label}</span>
    <span className="percentage">{percentage + "%"}</span>
  </li>
);

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">{stats.map((item) => Stats(item))}</ul>
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
