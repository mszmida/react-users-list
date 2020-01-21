import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchInput.module.css';

function SearchInput({ placeholder, onChange }) {
  return (
    <input
      className={styles.component}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchInput;
