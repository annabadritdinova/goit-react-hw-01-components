import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <>
      <span className={isOnline ? styles.online : styles.offline}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};