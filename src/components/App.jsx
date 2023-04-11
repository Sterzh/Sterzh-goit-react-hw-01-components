import user from 'data/user.json';
import Profile from './Profile/Profile';

import data from 'data/data.json';
import Statistics from './Statistics/Statistics';
import './Statistics/Statistics.module.css';

import friends from 'data/friends.json';
import FriendList from './FriendList/FriendList';
import './FriendList/FriendList.module.css';

import transactions from 'data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import './TransactionHistory/TransactionHistory.module.css';

export const App = () => {
  return (
    <>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>
      <div>
        <FriendList friends={friends} />;
      </div>
      <div>
        <TransactionHistory items={transactions} />;
      </div>
    </>
  );
};
