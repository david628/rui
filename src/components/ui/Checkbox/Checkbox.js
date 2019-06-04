import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Checkbox extends Component {
  static propTypes = {
    handleChange: PropTypes.func
  };
  static defaultProps = {

  };
  constructor(props) {
    super(props);
    const checked = props.checked;
    this.state = {
      checked
    };
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    //const {checked} = nextProps;
    if(this.props.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked
      });
    }
  }
  componentDidUpdate() {

  }
  handleChange = (e) => {
    const value = e.target.value;
    const { checked } = this.state;
    if(this.props.onChange) {
      this.props.onChange(e, { ...this.props, value });
    } else {
      this.setState({
        checked: !checked
      });
    }
  };
  render() {
    const props = this.props;
    const { className, children, ...others } = props;
    const { checked } = this.state;
    return (
      <label className="dldh-checkbox">
        <span className={checked ? "dldh-checkbox-content dldh-checkbox-checked" : "dldh-checkbox-content"}>
          <span className="dldh-checkbox-inner"></span>
          <input className="dldh-checkbox-input" type="checkbox" {...others} checked={checked} onChange={this.handleChange}/>
        </span>
        <span>{children}</span>
      </label>
    );
  }
}
export default Checkbox;