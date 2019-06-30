import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Option extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
  static isSelectOption = true;
}
export default Option;