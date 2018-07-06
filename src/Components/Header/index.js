import React from 'react';
import propsTypes from 'prop-types';
import styles from './index.scss';

const Header = props => (
  <div className={styles.header}>
    {props.children}
  </div>
);

export default Header;

Header.defaultProps = {
  children: false,
};

Header.propTypes = {
  children: propsTypes.node,
};
