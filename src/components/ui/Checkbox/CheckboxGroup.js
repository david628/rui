import React, { Component } from 'react';
import PropTypes from 'prop-types';
const prefix = 'dldh-checkbox-group';
export default function CheckboxGroup(props) {
  const { size, className, ...others } = props;
  const sizeCls = ({
    large: 'lg',
    small: 'sm',
  })[size] || '';
  return <div {...others} className={prefix}></div>;
}
CheckboxGroup.propTypes = {
  size: PropTypes.oneOf(['large', 'default', 'small']),
};