import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';

import UsersPage from '../UsersPage';

describe('<UsersPage /> component', () => {
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

  beforeEach(() => {
    jest.spyOn(global, 'fetch');
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  test('renders with appropriate data', async () => {
    const response = {
      ok: true,
      json: () => Promise.resolve(usersData)
    };

    global.fetch.mockResolvedValue(response);

    const {
      getByText,
      getByPlaceholderText,
      getByTestId,
      getAllByTestId
    } = render(<UsersPage />);

    const header = getByText(/users list/i);
    const searchInput = getByPlaceholderText(/search by user name/i);
    const loader = getByTestId('loader');

    expect(header).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    const users = getAllByTestId('user');

    expect(users.length).toBe(3);
  });
});
