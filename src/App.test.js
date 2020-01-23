import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('<App /> root component', () => {
  test('renders without errors', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/^users list/i);

    expect(linkElement).toBeInTheDocument();
  });
});
