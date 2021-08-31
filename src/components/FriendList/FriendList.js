import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
