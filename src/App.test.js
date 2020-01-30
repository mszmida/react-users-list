import React from 'react';
import { render, wait } from '@testing-library/react';

import App from './App';

describe('<App /> root component', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  test('renders without any errors', async () => {
    const response = {
      ok: true,
      json: () => Promise.resolve([])
    };

    global.fetch.mockResolvedValue(response);

    const { getByText, getByPlaceholderText } = render(<App />);

    const pageHeader = getByText(/users list/i);
    const searchInput = getByPlaceholderText(/search by user name/i);
    const footerText = getByText(/powered by/i);

    expect(pageHeader).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();

    await wait();
  });
});
