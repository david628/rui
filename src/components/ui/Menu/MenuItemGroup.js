import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopupMenu from './PopupMenu';
class MenuItemGroup extends Component {
  static propTypes = {
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
    const titleClassName = `dldh-menu-item-group-title`;
    const listClassName = `dldh-menu-item-group-list`;
    const { title, children } = props;
    // menuAllProps.forEach(key => delete props[key]);
    // delete props.onClick;
    return (
      <li className="dldh-menu-item-group">
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