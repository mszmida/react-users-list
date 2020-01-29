import React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved
} from '@testing-library/react';

import FilterableUsersList from '../FilterableUsersList';

describe('<FilterableUsersList /> component', () => {
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

  test('renders filterable users list with appropriate data', async () => {
    const response = {
      ok: true,
      json: () => Promise.resolve(usersData)
    };

    global.fetch.mockResolvedValue(response);

    const { getByPlaceholderText, getByTestId, getAllByTestId } = render(
      <FilterableUsersList />
    );

    const searchInput = getByPlaceholderText(/search by user name/i);
    const loader = getByTestId('loader');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    const users = getAllByTestId('user');

    expect(users.length).toBe(3);
  });

  test('renders users list filtered by "ar"', async () => {
    const response = {
      ok: true,
      json: () => Promise.resolve(usersData)
    };

    global.fetch.mockResolvedValue(response);

    const {
      getByPlaceholderText,
      getByTestId,
      getAllByTestId,
      queryByTestId
    } = render(<FilterableUsersList />);

    const searchInput = getByPlaceholderText(/search by user name/i);
    let loader = getByTestId('loader');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    let users = getAllByTestId('user');

    expect(users.length).toBe(3);

    const filterValue = 'ar';
    fireEvent.change(searchInput, { target: { value: filterValue } });
    loader = queryByTestId('loader');

    expect(searchInput).toHaveValue(filterValue);
    expect(loader).not.toBeInTheDocument();

    users = getAllByTestId('user');

    expect(users.length).toBe(1);
    expect(users[0]).toHaveTextContent('2.');
    expect(users[0]).toHaveTextContent('Tony Stark');
    expect(users[0]).toHaveTextContent('@tstark');
  });

  test('renders no users message for no data in response', async () => {
    const response = {
      ok: true,
      json: () => Promise.resolve([])
    };

    global.fetch.mockResolvedValue(response);

    const {
      getByPlaceholderText,
      getByTestId,
      queryAllByTestId,
      getByText
    } = render(<FilterableUsersList />);

    const searchInput = getByPlaceholderText(/search by user name/i);
    const loader = getByTestId('loader');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    const users = queryAllByTestId('user');
    const message = getByText(/no users/i);

    expect(users.length).toBe(0);
    expect(message).toBeInTheDocument();
  });

  test('renders no users message for filter "aaa"', async () => {
    const response = {
      ok: true,
      json: () => Promise.resolve(usersData)
    };

    global.fetch.mockResolvedValue(response);

    const {
      getByPlaceholderText,
      getByTestId,
      getAllByTestId,
      queryByTestId,
      queryAllByTestId,
      getByText
    } = render(<FilterableUsersList />);

    const searchInput = getByPlaceholderText(/search by user name/i);
    let loader = getByTestId('loader');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');
    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(() => getByTestId('loader'));

    let users = getAllByTestId('user');

    expect(users.length).toBe(3);

    const filterValue = 'aaa';
    fireEvent.change(searchInput, { target: { value: filterValue } });
    loader = queryByTestId('loader');

    expect(searchInput).toHaveValue(filterValue);
    expect(loader).not.toBeInTheDocument();

    users = queryAllByTestId('user');
    const message = getByText(/no users/i);

    expect(users.length).toBe(0);
    expect(message).toBeInTheDocument();
  });
});
