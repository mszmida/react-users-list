import React from 'react';

import styles from './UsersPage.module.css';
import { FilterableUsersList } from '../../common/components';

function UsersPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Users list</h1>

      <FilterableUsersList />
    </div>
  );
}

export default UsersPage;
