import React from 'react';
import differenceBy from 'lodash/differenceBy';
import { Subscribe } from 'unstated';

import UserCardItem from './UserCardItem';
import SideDrawerHeader from './SideDrawerHeader';
import SidebarProvider from '../../providers/SidebarProvider';
import CarPathProvider from '../../providers/CarPathProvider';
import styles from './index.scss';

const { addButtonStyle, sidebarContainer, drawerContent } = styles;

const SideDrawer = () => (
  <Subscribe to={[SidebarProvider, CarPathProvider]}>
    {(sidebar, carpath) => {
      const { state: { carPathPoints, carPath } } = carpath;
      const notAddedItems = differenceBy(carPath, carPathPoints, 'lat');
      const containerStyles = {
        opacity: sidebar.state.isOpen ? 1 : 0,
        transform: sidebar.state.isOpen
          ? 'translate(0px)'
          : 'translate(50%)',
      };

      // Or maybe you want to keep it simple:
      // if (!sidebar.state.isOpen) {
      //   return null;
      // }

      return (
        <div style={containerStyles} className={sidebarContainer}>
          <SideDrawerHeader />

          <div className={drawerContent}>
            {carPathPoints.length && (
                carPathPoints.map(point => (
                  <UserCardItem
                    key={point.lat}
                    carpath={carpath}
                    itemData={point}
                  />
                ))
              )}

            {notAddedItems.length ? (
              <button className={addButtonStyle} onClick={carpath.addToPath}>
                  + Add Stop Point
              </button>
              ) : <p>All points added. Please, remove any card to add new one</p>
            }

          </div>

        </div>
      );
    }}
  </Subscribe>
);

export default SideDrawer;
