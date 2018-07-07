import React from 'react';
import { Subscribe } from 'unstated';

import UserDataProvider from '../../providers/UserDataProvider';
import ManagementComponent from './ManagementComponent';


const Management = () => (
  <Subscribe to={[UserDataProvider]}>
    {
      // Wrap it into subscription to UserDataProvider
      // I guess this is the way I can have access to
      // Lifecycle methods
      userdata => <ManagementComponent dataProvider={userdata} />
    }
  </Subscribe>
);

export default Management;
