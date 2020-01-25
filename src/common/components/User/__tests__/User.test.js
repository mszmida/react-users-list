import React from 'react';
import { render } from '@testing-library/react';

import User from '../User';

describe('<User /> component', () => {
  test('renders with appropriate data', () => {
    const { getByTestId } = render(
      <User
        user={{
          id: 1,
          name: 'John Doe',
          username: 'johny'
        }}
      />
    );

    const user = getByTestId('user');

    expect(user).toBeInTheDocument();
    expect(user).toHaveTextContent('1.');
    expect(user).toHaveTextContent('John Doe');
    expect(user).toHaveTextContent('@johny');
  });
});
