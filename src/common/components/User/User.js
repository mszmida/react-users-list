import React from 'react';
import PropTypes from 'prop-types';

import styles from './User.module.css';

function User({ user }) {
  return (
    <div data-testid="user" className={styles.component}>
      <span className={styles.id}>{user.id}.</span>
      <span className={styles.name}>{user.name}</span>
      <span className={styles.username}>@{user.username}</span>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string
};

export default User;
