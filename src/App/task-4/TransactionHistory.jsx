import React from "react";
import "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const transaction = ({ id, type, amount, currency }) => (
  <tr key={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>{items.map((item) => transaction(item))}</tbody>
  </table>
);

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
