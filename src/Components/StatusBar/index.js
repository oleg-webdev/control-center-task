import React from 'react';
import styles from './index.scss';

const StatusBar = () => (
  <div className={styles.statusBar}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.indicator} />
        <span className={styles.value}>45</span>
        <span>Online</span>
      </li>
      <li className={styles.item}>
        <span className={styles.indicator} />
        <span className={styles.value}>2</span>
        <span>Activating</span>
      </li>
      <li className={styles.item}>
        <span className={styles.indicator} />
        <span className={styles.value}>12</span>
        <span>Active</span>
      </li>
      <li className={styles.item}>
        <span className={styles.indicator} />
        <span className={styles.value}>23</span>
        <span>In-ride</span>
      </li>
      <li className={styles.item}>
        <span className={styles.indicator} />
        <span className={styles.value}>3</span>
        <span>Issues</span>
      </li>
    </ul>
  </div>
);

export default StatusBar;
