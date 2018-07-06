import React from 'react';
import { sideDrawerHeader } from '../../assets/images/placeholders';
import styles from './index.scss';

const SideDrawerHeader = () => (
  <div className={styles.sideDrawerHeader}>
    <p>{'< '}List</p>
    <img src={sideDrawerHeader} alt="" />
  </div>
);

export default SideDrawerHeader;
