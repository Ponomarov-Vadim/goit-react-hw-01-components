import React from "react";
import "./task-2.css";

const Stats = ({ id, label, percentage }) => (
  <li className="list-item" key={id}>
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
