import React from 'react';
import PropTypes from 'prop-types';
const prefix = 'dldh-btn-group';
export default function FormGroup(props) {
  const { size, className, ...others } = props;
  const sizeCls = ({
    large: 'lg',
    small: 'sm',
  })[size] || '';
  return <div {...others} className={prefix}></div>;
}
FormGroup.propTypes = {
  size: PropTypes.oneOf(['large', 'default', 'small']),
};