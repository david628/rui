import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopupMenu from './PopupMenu';
class MenuItemGroup extends Component {
  static propTypes = {
    sprefix: PropTypes.string,
    renderMenuItem: PropTypes.func,
    index: PropTypes.number,
    className: PropTypes.string,
    subMenuKey: PropTypes.string,
    //rootPrefixCls: PropTypes.string,
  };
  static defaultProps = {
    disabled: true,
  };
  renderInnerMenuItem = (item) => {
    const { renderMenuItem, index } = this.props;
    return renderMenuItem(item, index, this.props.subMenuKey);
  }
  render() {
    const { ...props } = this.props;
    const sprefix = props.sprefix;
    const titleClassName = `${sprefix}-menu-item-group-title`;
    const listClassName = `${sprefix}-menu-item-group-list`;
    const className = `${sprefix}-menu-item-group`;
    const { title, children } = props;
    // menuAllProps.forEach(key => delete props[key]);
    // delete props.onClick;
    return (
      <li className={className}>
        <div
          className={titleClassName}
          title={typeof title === 'string' ? title : undefined}
        >
          {title}
        </div>
        <ul className={listClassName}>
          {React.Children.map(children, this.renderInnerMenuItem)}
        </ul>
      </li>
    );
  }
}
MenuItemGroup.isMenuItemGroup = true;
export default MenuItemGroup;