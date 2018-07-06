import React from 'react';
import differenceBy from 'lodash/differenceBy';
import { Subscribe } from 'unstated';

import UserCardItem from './UserCardItem';
import SideDrawerHeader from './SideDrawerHeader';
import SidebarProvider from '../../providers/SidebarProvider';
import CarPathProvider from '../../providers/CarPathProvider';
import styles from './index.scss';

const SideDrawer = () => (
  <Subscribe to={[SidebarProvider, CarPathProvider]}>
    {(sidebar, carpath) => {
      const { state: { carPathPoints, carPath } } = carpath;
      const notAddedItems = differenceBy(carPath, carPathPoints, 'lat');
      return (
        !sidebar.state.isOpen ? null : (
          <div className={styles.SideDrawer}>
            <SideDrawerHeader />
            <div className={styles.sideDrawerContainer}>
              {carPathPoints.length > 0 && (
                carPathPoints.map(point => (
                  <UserCardItem key={point.lat} carpath={carpath} itemData={point} />
                ))
              )}

              {notAddedItems.length === 0 ? (
                <p>All points added, please, remove any card to add new one</p>
              ) : (
                <button
                  className={styles.addButtonStyle}
                  onClick={carpath.addToPath}
                >+ Add Stop Point
                </button>
              )
            }

            </div>

          </div>
        )
      );
    }}
  </Subscribe>
);

export default SideDrawer;
