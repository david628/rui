import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Input extends Component {
  static propTypes = {
    handleChange: PropTypes.func
  };
  static defaultProps = {

  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {

  }
  componentDidUpdate() {

  }
  handleChange = (e) => {
    const value = e.target.value;
    if(this.props.onChange) {
      this.props.onChange(e, { ...this.props, value });
    }
  };
  render() {
    const props = this.props;
    const { size, onChange, ...others } = props;
    if(props.type == 'textarea') {
      return (
        <textarea {...others} className="dldh-input"></textarea>
      );
    } else {
      return (
        <input className="dldh-input"
        {...others}
        onChange={this.handleChange}
        />
      );
    }
  }
}
export default Input;