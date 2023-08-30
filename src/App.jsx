import profile from '../src/'

import { Profile } from './components/firstTask/firstTask'
import { Statistics } from './components/secondTask/secondTask'
import { FriendList } from './components/threeTask/threeTask'
import {TransactionHistory} from './components/fourTask/fourTask'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory/>
    </div>
  );
};
