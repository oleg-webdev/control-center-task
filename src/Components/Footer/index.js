import React from 'react';
import propsTypes from 'prop-types';
import styles from './index.scss';

const Footer = props => (
  <div className={styles.footer}>
    {props.children}
  </div>
);

export default Footer;

Footer.defaultProps = {
  children: false,
};

Footer.propTypes = {
  children: propsTypes.node,
};
