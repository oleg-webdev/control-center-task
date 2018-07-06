
import React from 'react';
import propsTypes from 'prop-types';
import styles from './index.scss';

type BodyProps = {
  styles: any,
  classes: string
}

const Body = (props: BodyProps) => (
  <div
    style={{ ...props.styles }}
    className={`${props.classes} ${styles.body}`}
  >
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
