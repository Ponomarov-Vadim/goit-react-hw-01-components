import React from "react";

import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import user from "../../db/user.json";
import statisticalData from "../../db/statistical-data.json";
import friends from "../../db/friends.json";
import transactions from "../../db/transactions.json";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
