import React from 'react';
import { render } from '@testing-library/react';

import { UsersProvider } from '../../../contexts/users-context';
import { REQUEST_STATUS } from '../../../enums';
import UsersList from '../UsersList';

describe('<UsersList /> component', () => {
  test(`renders users list with appropriate data for status "${REQUEST_STATUS.SUCCESS}"`, () => {
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

    const { getAllByTestId } = render(
      <UsersProvider
        value={{
          status: REQUEST_STATUS.SUCCESS,
          users: usersData
        }}
      >
        <UsersList />
      </UsersProvider>
    );

    const users = getAllByTestId('user');

    expect(users.length).toBe(3);

    users.forEach((user, index) => {
      expect(user).toBeInTheDocument();
      expect(user).toHaveTextContent(`${usersData[index].id}.`);
      expect(user).toHaveTextContent(`${usersData[index].name}`);
      expect(user).toHaveTextContent(`@${usersData[index].username}`);
    });
  });
});
