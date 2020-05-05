import React from "react";
import ReactDOM from "react-dom";
import Profile from "./task-1/Profile";
import Statistics from "./task-2/Statistics";
import FriendList from "./task-3/FriendList";
import TransactionHistory from "./task-4/TransactionHistory";
import user from "./task-1/user.json";
import statisticalData from "./task-2/statistical-data.json";
import friends from "./task-3/friends.json";
import transactions from "./task-4/transactions.json";

ReactDOM.render(
  [
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />,
    <Statistics title="Upload stats" stats={statisticalData} />,
    <FriendList friends={friends} />,
    <TransactionHistory items={transactions} />,
  ],
  document.getElementById("root")
);
