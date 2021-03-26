import user from './components/data/user.json';
import Profile from './components/Profile/Profile.jsx';

import friends from './components/data/friends.json';
import FriendList from './components/FriendList/FriendList.jsx';

import transactions from './components/data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

import statisticalData from './components/data/statistical-data.json';
import Statistics from './components/Statistics/Statistics.jsx';

export default function App() {
  return (
    <div>
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
    </div>
  );
}