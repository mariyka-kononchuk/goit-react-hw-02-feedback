//components
import Container from './components/Container/Container';
import Feedback from './components/Feedback/Feedback';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// data
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

//virtual DOM
export default function App() {
  return (
    <Container>
      <Feedback />
      <Statistics/>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
