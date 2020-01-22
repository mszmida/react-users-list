import React from 'react';

import styles from './UsersList.module.css';
import { useUsersState } from '../../contexts/users-context';
import { Loader, User } from '../';

function UsersList() {
  const { status, users } = useUsersState();

  return (
    <Loader status={status}>
      <div className={styles.component}>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </Loader>
  );
}

export default UsersList;
