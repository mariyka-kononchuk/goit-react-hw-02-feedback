import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ friends }) {
  return (
    <div className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: friends.isOnline ? 'green' : 'red' }}
      ></span>
      <img className={s.avatar} src={friends.avatar} alt="" width="48" />
      <p className={s.name}>{friends.name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
