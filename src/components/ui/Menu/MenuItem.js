import React, { Component } from 'react';
import PropTypes from 'prop-types';
class MenuItem extends Component {
  static propTypes = {
    // attribute: PropTypes.object,
    // rootPrefixCls: PropTypes.string,
    sprefix: PropTypes.string,
    eventKey: PropTypes.string,
    active: PropTypes.bool,
    // children: PropTypes.any,
    selectedKeys: PropTypes.array,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    // onItemHover: PropTypes.func,
    onSelect: PropTypes.func,
    onClick: PropTypes.func,
    onDeselect: PropTypes.func,
    // parentMenu: PropTypes.object,
    onDestroy: PropTypes.func,
    // onMouseEnter: PropTypes.func,
    // onMouseLeave: PropTypes.func,
    multiple: PropTypes.bool,
    isSelected: PropTypes.bool,
    // manualRef: PropTypes.func,
    // itemIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  };

  static defaultProps = {
    onSelect: function() {},
    //onMouseEnter: function() {},
    //onMouseLeave: function() {},
    //manualRef: function() {},
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentDidUpdate() {

  }
  onClick = (e) => {
    const { eventKey, multiple, onClick, onSelect, onDeselect, isSelected } = this.props;
    const info = {
      key: eventKey,
      keyPath: [eventKey],
      item: this,
      domEvent: e,
    };
    onClick(info);
    if (multiple) {
      if (isSelected) {
        onDeselect(info);
      } else {
        onSelect(info);
      }
    } else if (!isSelected) {
      onSelect(info);
    }
  };
  render() {
    const props = { ...this.props };
    let sprefix = props.sprefix;
    let className = [`${sprefix}-menu-item`];
    if(props.isSelected) {
      className.push(` ${sprefix}-menu-item-selected`);
    }
    if(!props.disabled && props.active) {
      className.push(` ${sprefix}-menu-submenu-active`);
    }
    if(props.disabled) {
        className.push(` ${sprefix}-menu-submenu-disabled`);
    }
    className = className.join('');
    let attrs = {
      // ...props.attribute,
      title: props.title,
      className,
      // set to menuitem by default
      // role: props.role || 'menuitem',
      'aria-selected': props.isSelected,
      'aria-disabled': props.disabled,
    };
    const style = {
      ...props.style,
    };
    //if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level;
    //}
    //const style = {
      //paddingLeft: props.level * 24
    //};
    const mouseEvent = {
      onClick: props.disabled ? null : this.onClick,
      //onMouseLeave: props.disabled ? null : this.onMouseLeave,
      //onMouseEnter: props.disabled ? null : this.onMouseEnter,
    };
    return (
      <li
        { ...attrs }
        { ...mouseEvent }
        style={ style }
      >
        {this.props.children}
      </li>
    );
  }
}
export default MenuItem;