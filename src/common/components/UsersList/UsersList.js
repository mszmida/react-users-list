import React from 'react';

import styles from './UsersList.module.scss';
import { useUsersState } from '../../contexts/users-context';
import { Loader, User } from '../';

function UsersList() {
  const { status, users } = useUsersState();

  return (
    <Loader status={status}>
      <div className={styles.component}>
        {users.length === 0 && (
          <div className={styles.noData}>No users found.</div>
        )}

        {users.length > 0 &&
          users.map(user => <User key={user.id} user={user} />)}
      </div>
    </Loader>
  );
}

export default UsersList;
