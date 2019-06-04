import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class DropdownMenu extends Component {
  static propTypes = {
  };
  static defaultProps = {
  };
  constructor(props) {
    super(props);
    this.body = document.createElement('div');
    this.body.className = `dldh-dropdown-menu`;
    document.body.appendChild(this.body);
  }
  componentDidMount() {

  }
  componentDidUpdate() {

  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.body);
  }
}
export default DropdownMenu;