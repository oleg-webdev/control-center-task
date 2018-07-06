import React from 'react';
import Input from '../Input';
import styles from './index.scss';

const MapSearch = () => (
  <div className={styles.mapSearch}>
    <div className={styles.formGroup}>
      <img className={styles.icon__magnifier} src="../../../src/assets/images/header/icon-magnifier.png" alt="" />
      <Input />
    </div>
  </div>
);

export default MapSearch;
