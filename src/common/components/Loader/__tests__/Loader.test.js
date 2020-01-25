import React from 'react';
import { render } from '@testing-library/react';

import Loader from '../Loader';
import { REQUEST_STATUS } from '../../../enums';

describe('<Loader /> component', () => {
  test('renders loader instead of children for status "IN_PROGRESS"', () => {
    const childRef = React.createRef();

    const { getByTestId } = render(
      <Loader status={REQUEST_STATUS.IN_PROGRESS}>
        <div ref={childRef}>child</div>
      </Loader>
    );

    const loader = getByTestId('loader');

    expect(loader).toBeInTheDocument();
    expect(childRef.current).not.toBeInTheDocument();
  });

  test('renders children instead of loader for status "SUCCESS"', () => {
    const childRef = React.createRef();

    const { queryByTestId } = render(
      <Loader status={REQUEST_STATUS.SUCCESS}>
        <div ref={childRef}>child</div>
      </Loader>
    );

    const loader = queryByTestId('loader');

    expect(loader).not.toBeInTheDocument();
    expect(childRef.current).toBeInTheDocument();
  });

  test('renders null for status "IDLE"', () => {
    const childRef = React.createRef();

    const { queryByTestId } = render(
      <Loader status={REQUEST_STATUS.IDLE}>
        <div ref={childRef}>child</div>
      </Loader>
    );

    const loader = queryByTestId('loader');

    expect(loader).not.toBeInTheDocument();
    expect(childRef.current).not.toBeInTheDocument();
  });

  test('renders null for status "ERROR"', () => {
    const childRef = React.createRef();

    const { queryByTestId } = render(
      <Loader status={REQUEST_STATUS.ERROR}>
        <div ref={childRef}>child</div>
      </Loader>
    );

    const loader = queryByTestId('loader');

    expect(loader).not.toBeInTheDocument();
    expect(childRef.current).not.toBeInTheDocument();
  });
});
