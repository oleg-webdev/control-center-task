import React from 'react';
import { Subscribe } from 'unstated';

import SidebarProvider from '../../providers/SidebarProvider';
import styles from './index.scss';

// sidebar.state.isOpen
const Map = () => (
  <Subscribe to={[SidebarProvider]}>
    {(sidebar) => {
      const { state: { isOpen } } = sidebar;
      const sidebarState = isOpen ? 'open' : 'closed';
      return (
        <div className={styles.mapInnerStyle}>
          <div>
            <p>Sidebar is {sidebarState}, so:</p>
            {isOpen ? (
              <div>
                <h2>There should be single car path view</h2>
              </div>
            ) : (
              <div>
                <h2>There should be map view</h2>
              </div>
            )}
          </div>
        </div>
      );
    }}
  </Subscribe>
);

export default Map;
