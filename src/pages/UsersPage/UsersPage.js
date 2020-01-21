import React from 'react';

import styles from './UsersPage.module.css';
import { SearchInput, UsersList } from '../../common/components';

function UsersPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Users list</h1>

      <SearchInput placeholder="Search by user name..." />

      <UsersList />
    </div>
  );
}

export default UsersPage;
