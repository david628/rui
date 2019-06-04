import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'circle-outline']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string
  };
  static defaultProps = {
    onClick: function() {},
    loading: false,
    className: 'dldh-btn'
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
  handleMouseUp = () => {

  };
  handleClick = (args) => {
    this.props.onClick(args);
  };
  render() {
    const props = this.props;
    const { type, shape, size, className, htmlType, children, icon, loading, prefixCls, ...others } = props;
    const iconType = loading ? 'loading' : icon;
    //const child = React.Children.map(children, insertSpace);
    //{iconType ? <Icon type={iconType} /> : null}
    if(props.href != undefined) {
      return (
        <a
          {...others}
          className={className}
          onMouseUp={this.handleMouseUp}
          onClick={this.handleClick}
        >
          {this.props.children}
        </a>
      );
    } else {
      return (
        <button
          {...others}
          type={type || 'button'}
          className={className}
          onMouseUp={this.handleMouseUp}
          onClick={this.handleClick}
        >
          {this.props.children}
        </button>
      );
    }
  }
}
export default Button;