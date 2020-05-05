import React from "react";
import "./task-2.css";

function stats(item) {
  return (
    <li className="list-item" key={item.id}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage + "%"}</span>
    </li>
  );
}

export default class Statistics extends React.Component {
  render() {
    return (
      <section className="statistics">
        {this.props.title ? (
          <h2 className="title">{this.props.title}</h2>
        ) : null}
        <ul className="stat-list">
          {this.props.stats.map((item) => stats(item))}
        </ul>
      </section>
    );
  }
}
