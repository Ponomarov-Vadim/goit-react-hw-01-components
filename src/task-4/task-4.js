import React from "react";
import "./task-4.css";

function transaction(params) {
  return (
    <tr key={params.id}>
      <td>{params.type}</td>
      <td>{params.amount}</td>
      <td>{params.currency}</td>
    </tr>
  );
}

export default class TransactionHistory extends React.Component {
  render() {
    return (
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>{this.props.items.map((item) => transaction(item))}</tbody>
      </table>
    );
  }
}
