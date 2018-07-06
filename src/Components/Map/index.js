import React from 'react';
import { Subscribe } from 'unstated';

import SidebarProvider from '../../providers/SidebarProvider';
import CarPathProvider from '../../providers/CarPathProvider';
import CarMap from './CarMap';
import { GOOGLE_API_URL } from '../../common/consts';
import styles from './index.scss';

const Map = () => (
  <Subscribe to={[SidebarProvider, CarPathProvider]}>
    {(sidebar, carpath) => {
      const { state: { isOpen } } = sidebar;
      const sidebarState = isOpen ? 'open' : 'closed';
      return (
        isOpen ? (
          <CarMap
            isMarkerShown
            carPath={carpath.state.carPath}
            carMarkers={carpath.state.carPathPoints}
            activePath={carpath.state.activePath}
            googleMapURL={GOOGLE_API_URL}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%', flexBasis: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
          ) : (
            <div className={styles.mapInnerStyle}>
              <div>
                <p>Sidebar is {sidebarState}, so</p>
                <h2>there should be map with all cars data, </h2>
                <p>but not implemented, since this part is not in task mission.</p>
                <p>click to button on SidebarNav to toggle a vehicle details</p>
                <hr />
                <small>
                  Data flow has been handled thru {"'unstated'"} lib per requirements
                </small>
              </div>
            </div>
          )
      );
    }}
  </Subscribe>
);

export default Map;
