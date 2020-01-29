import React from 'react';
import { render } from '@testing-library/react';

import { UsersProvider } from '../../../contexts/users-context';
import { REQUEST_STATUS } from '../../../enums';
import UsersList from '../UsersList';

describe('<UsersList /> component', () => {
  test(`renders users list for status "${REQUEST_STATUS.SUCCESS}"`, () => {
    const usersData = [
      {
        id: 1,
        name: 'dr Robert Ford',
        username: 'rford'
      },
      {
        id: 2,
        name: 'Tony Stark',
        username: 'tstark'
      },
      {
        id: 3,
        name: 'Kevin Mitnick',
        username: 'condor'
      }
    ];

    const { queryByTestId, getAllByTestId } = render(
      <UsersProvider
        value={{
          status: REQUEST_STATUS.SUCCESS,
          users: usersData
        }}
      >
        <UsersList />
      </UsersProvider>
    );

    const loader = queryByTestId('loader');
    const users = getAllByTestId('user');

    expect(loader).not.toBeInTheDocument();
    expect(users.length).toBe(3);
  });

  test(`renders appropriate message for no users and status "${REQUEST_STATUS.SUCCESS}"`, () => {
    const { queryByTestId, queryAllByTestId, getByText } = render(
      <UsersProvider
        value={{
          status: REQUEST_STATUS.SUCCESS,
          users: []
        }}
      >
        <UsersList />
      </UsersProvider>
    );

    const loader = queryByTestId('loader');
    const users = queryAllByTestId('user');
    const message = getByText(/no users/i);

    expect(loader).not.toBeInTheDocument();
    expect(users.length).toBe(0);
    expect(message).toBeInTheDocument();
  });
});
