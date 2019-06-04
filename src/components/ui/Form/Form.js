import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };
  static defaultProps = {
    onSubmit(e) {
      e.preventDefault();
    }
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
  render() {
    const props = this.props;
    const { className, ...others } = props;
    return (
      <form className={className} {...others}></form>
    );
  }
}
export default Form;