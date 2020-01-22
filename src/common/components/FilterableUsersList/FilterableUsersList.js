import React, { useEffect } from 'react';

import { useUsersDispatcher } from '../../contexts/users-context';
import { SearchInput, UsersList } from '../';
import { UsersProvider } from '../../contexts/users-context';

function FilterableUsersList() {
  const dispatcher = useUsersDispatcher();

  useEffect(() => {
    dispatcher.getUsers();
  }, [dispatcher]);

  const handleSearchChange = event => {
    dispatcher.searchUsersByText(event.target.value);
  };

  return (
    <>
      <SearchInput
        placeholder="Search by user name..."
        onChange={handleSearchChange}
      />

      <UsersList />
    </>
  );
}

export default () => (
  <UsersProvider>
    <FilterableUsersList />
  </UsersProvider>
);
