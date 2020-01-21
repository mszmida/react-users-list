import React from 'react';

import styles from './Footer.module.css';
import reactLogo from '../../assets/logo.svg';

function Footer() {
  return (
    <>
      <footer className={styles.content}>
        <span>Powered by</span>

        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img className={styles.logo} src={reactLogo} alt="React logo" />
        </a>
      </footer>
    </>
  );
}

export default Footer;
