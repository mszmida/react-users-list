import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('<App /> root component', () => {
  test('renders without any errors', async () => {
    const response = {
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: 'John Doe',
            username: 'johny'
          }
        ])
    };

    jest.spyOn(global, 'fetch').mockResolvedValue(response);

    const {
      getByText,
      getByPlaceholderText,
      getByTestId,
      queryByTestId,
      findByTestId
    } = render(<App />);

    const pageHeader = getByText(/users list/i);
    const searchInput = getByPlaceholderText(/search by user name/i);
    let loader = getByTestId('loader');

    expect(pageHeader).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(loader).toBeInTheDocument();

    const user = await findByTestId('user');
    loader = queryByTestId('loader');

    expect(loader).not.toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(user).toHaveTextContent('1.');
    expect(user).toHaveTextContent('John Doe');
    expect(user).toHaveTextContent('@johny');
  });
});
