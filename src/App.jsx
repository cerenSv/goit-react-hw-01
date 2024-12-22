// User Card
import User from './components/User'
import profileData from '../user-data.json'
// Friend List
import FriendList from './components/FriendList'
import friends from '../friends.json';
// İşlem Geçmişi (Ay çok sıkıcı hocam bu neeee)
import TransactionHistory from './components/TransactionHistory';
import transactions from '../transactions.json';

const Title = ({ children }) => {
  return <h2 style={{textAlign: "center"}}>{children}</h2>
}

function App() {
  return (
    <div>
      <Title>Task 1: User Card</Title>
      {profileData.map(user => {
      return (
        <User
          key={user.tag}
          name={user.username}
          tag={user.tag}
          location={user.location}
          image={user.avatar}
          stats={user.stats}
        />
      )
      })}
      <Title>Task 2: Friend List</Title>
      <FriendList friends={friends} />

      <Title>Task 3: Transaction History</Title>
      <TransactionHistory items={transactions} />

    </div>
  )
}

export default App;
