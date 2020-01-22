import React, { useEffect } from 'react';

import { useUsersDispatcher } from '../../contexts/UsersContext';
import { SearchInput, UsersList } from '../';
import { UsersProvider } from '../../contexts/UsersContext';

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
