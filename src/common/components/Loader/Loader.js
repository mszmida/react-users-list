import React from 'react';
import PropTypes from 'prop-types';

import styles from './Loader.module.css';
import { REQUEST_STATUS } from '../../enums';

function Loader({ status, children }) {
  switch (status) {
    case REQUEST_STATUS.IN_PROGRESS:
      return (
        <div className={styles.component}>
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
