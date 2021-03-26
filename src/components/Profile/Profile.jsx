import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({
  avatar,
  name,
  tag,
  location,
  stats: {followers, views, likes},
}) {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={styles.item}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={styles.item}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
   followers: PropTypes.number.isRequired,
   views: PropTypes.number.isRequired,
   likes: PropTypes.number.isRequired,
  }),
};