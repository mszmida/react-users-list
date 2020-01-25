import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../Footer';

describe('<Footer /> component', () => {
  test('renders with appropriate text and link', () => {
    const { getByText, getByTestId, getByAltText } = render(<Footer />);

    const text = getByText(/powered by/i);
    const logoLink = getByTestId('logo-link');
    const logoImg = getByAltText(/react logo/i);

    expect(text).toBeInTheDocument();
    expect(logoLink).toBeInTheDocument();
    expect(logoLink.href).toBe('https://reactjs.org/');
    expect(logoLink).toContainElement(logoImg);
  });
});
