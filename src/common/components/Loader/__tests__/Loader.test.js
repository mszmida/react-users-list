import React from 'react';
import { render } from '@testing-library/react';

import Loader from '../Loader';
import { REQUEST_STATUS } from '../../../enums';

describe('<Loader /> component', () => {
  test('renders loader instead of children for status "IN_PROGRESS"', () => {
    const childRef = React.createRef();

    const { container, asFragment } = render(
      <Loader status={REQUEST_STATUS.IN_PROGRESS}>
        <div ref={childRef}>child</div>
      </Loader>
    );

    expect(container.firstChild).not.toContainElement(childRef.current);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders children instead of loader for status "SUCCESS', () => {
    const childRef = React.createRef();

    const { container } = render(
      <Loader status={REQUEST_STATUS.SUCCESS}>
        <div ref={childRef}>child</div>
      </Loader>
    );

    expect(container.firstChild).toContainElement(childRef.current);
  });

  test('renders null for status "IDLE', () => {
    const { container } = render(
      <Loader status={REQUEST_STATUS.IDLE}>
        <div>child</div>
      </Loader>
    );

    expect(container.firstChild).not.toBeInTheDocument();
  });

  test('renders null for status "ERROR', () => {
    const { container } = render(
      <Loader status={REQUEST_STATUS.ERROR}>
        <div>child</div>
      </Loader>
    );

    expect(container.firstChild).not.toBeInTheDocument();
  });
});
