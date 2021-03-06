import React from 'react';
import PropTypes from 'prop-types';

import styles from './Loader.module.scss';
import { REQUEST_STATUS } from '../../enums';

function Loader({ status, children }) {
  switch (status) {
    case REQUEST_STATUS.IN_PROGRESS:
      return (
        <div data-testid="loader" className={styles.component}>
          <div className={styles.loaderDualRing}></div>
        </div>
      );

    case REQUEST_STATUS.SUCCESS:
      return children;

    default:
      return null;
  }
}

Loader.propTypes = {
  status: PropTypes.string,
  children: PropTypes.node
};

export default Loader;
