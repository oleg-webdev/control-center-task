import React from 'react';
import propsTypes from 'prop-types';

import styles from './index.scss';

const Sidebar = props => (
  <div className={styles.sidebar}>
    {props.children}
  </div>
);

export default Sidebar;

Sidebar.defaultProps = {
  children: false,
};

Sidebar.propTypes = {
  children: propsTypes.node,
};
