import React from 'react';
import Header from '../../Components/Header';
import MapSearch from '../../Components/MapSearch';
import Body from '../../Components/Body';
import SideDrawer from '../../Components/SideDrawer';
import StatusBar from '../../Components/StatusBar';
import Map from '../../Components/Map';
import KpisWidget from '../../Components/KpisWidget';
import Footer from '../../Components/Footer';
import styles from './index.scss';

const Dashboard = () => (
  <React.Fragment>
    <Header>
      <MapSearch />
    </Header>
    <Body classes={styles.dashboardBody}>
      <Map />
      <KpisWidget />
      <SideDrawer />
    </Body>
    <Footer>
      <StatusBar />
    </Footer>
  </React.Fragment>
);

export default Dashboard;
