import React from 'react';
import propsTypes from 'prop-types';
import styles from './index.scss';

const Body = props => (
  <div className={styles.body}>
    {props.children}
  </div>
);

export default Body;

Body.defaultProps = {
  children: false,
};

Body.propTypes = {
  children: propsTypes.node,
};
