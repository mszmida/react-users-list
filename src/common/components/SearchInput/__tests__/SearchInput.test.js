import React from 'react';
import { render } from '@testing-library/react';

import SearchInput from '../SearchInput';

describe('<SearchInput /> component', () => {
  test('renders with appropriate data', () => {
    const { getByPlaceholderText } = render(
      <SearchInput placeholder="Test placeholder" />
    );

    const searchInput = getByPlaceholderText('Test placeholder');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'text');
    expect(searchInput).toHaveValue('');
  });
});
