import React from 'react';
import { Subscribe } from 'unstated';

import SidebarProvider from '../../providers/SidebarProvider';
import { sideDrawerHeader } from '../../assets/images/placeholders';

import styles from './index.scss';

const SideDrawerHeader = () => (
  <Subscribe to={[SidebarProvider]}>
    {sidebar => (
      <div className={styles.sideDrawerHeader}>
        <button onClick={sidebar.close}>{'< '}List</button>
        <img src={sideDrawerHeader} alt="" />
      </div>
    )}
  </Subscribe>
);

export default SideDrawerHeader;
