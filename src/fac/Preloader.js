// @flow
import React from 'react';
import Loader from '../Ui/Loader';

type Types = {
  canIrender: boolean,
  children: Function,
  showPreloader: boolean
}

const ConditionalRender = ({ canIrender, children, showPreloader }: Types) => {
  // shows preloader while waiting data,
  // otherwise just nothing
  const fallback = showPreloader ? <Loader /> : null;
  return (
    canIrender ? children() : fallback
  );
};

ConditionalRender.defaultProps = {
  showPreloader: true,
  canIrender: false,
  children: () => {},
};


export default ConditionalRender;
