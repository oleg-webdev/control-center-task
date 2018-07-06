import React from 'react';
import { Subscribe } from 'unstated';

import SidebarProvider from '../../providers/SidebarProvider';
import styles from './index.scss';

const SideDrawer = () => (
  <Subscribe to={[SidebarProvider]}>
    {sidebar => (
      !sidebar.state.isOpen ? null : (
        <div className={styles.SideDrawer} />
      )
    )}
  </Subscribe>

);

export default SideDrawer;
