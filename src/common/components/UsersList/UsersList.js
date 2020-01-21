import React from 'react';

import styles from './UsersList.module.css';
import { User } from '../';

function UsersList() {
  const users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha'
    }
  ];

  return (
    <div className={styles.component}>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
