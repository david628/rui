import React, { Component } from 'react';
import Menu, { SubMenu, Item as MenuItem, Divider } from '@/components/ui/Menu';
//import { Menu } from 'antd';
import pathToRegexp from 'path-to-regexp';
import { Link } from 'react-router-dom';
import './SiderMenu.less';
//const { SubMenu } = Menu;
class SiderMenu extends Component {
  constructor(props) {
    super(props);
    this.menus = props.menuData;
    this.flatMenuKeys = this.getFlatMenuKeys(props.menuData);
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    };
  }
  componentDidMount() {
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        openKeys: this.getDefaultCollapsedSubMenus(nextProps),
      });
    }
  }
  checkPermissionItem(authority, ItemDom) {
    if (this.props.Authorized && this.props.Authorized.check) {
      const { check } = this.props.Authorized;
      return check(authority, ItemDom);
    }
    return ItemDom;
  }
  getIcon(icon) {
    if (typeof icon === 'string' && icon.indexOf('http') === 0) {
      return <img src={icon} alt="icon" className={ `sider-menu-item-img` } />;
    }
    if (typeof icon === 'string') {
      return <span type={icon} ></span>;
    }
    return icon;
  }
  conversionPath(path) {
    if (path && path.indexOf('http') === 0) {
      return path;
    } else {
      return `/${ path || '' }`.replace(/\/+/g, '/');
    }
  }
  urlToList(url) {
    const urllist = url.split('/').filter(i => i);
    return urllist.map((urlItem, index) => {
      return `/${urllist.slice(0, index + 1).join('/')}`;
    });
  }
  getFlatMenuKeys(menus) {
    let keys = [];
    menus.forEach(item => {
      if (item.children) {
        keys = keys.concat(this.getFlatMenuKeys(item.children));
      }
      keys.push(item.path);
    });
    return keys;
  }
  getDefaultCollapsedSubMenus(props) {
    const { location: { pathname } } = props || this.props;
    return this.urlToList(pathname)
    .map(item => {
      return this.getMeunMatcheys(item)[0];
    }).filter(item => item);
  }
  getMeunMatcheys(path) {
    return this.flatMenuKeys.filter(item => {
      return pathToRegexp(item).test(path);
    });
  }
  getSelectedMenuKeys() {
    const { location: { pathname } } = this.props;
    return this.urlToList(pathname).map(itemPath => this.getMeunMatcheys(itemPath).pop());
  }
  handleOpenChange(openKeys) {
    const lastOpenKey = openKeys[openKeys.length - 1];
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    //console.log([...openKeys]);
    this.setState({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
    });
  }
  isMainMenu(key) {
    return this.menus.some(item => key && (item.key === key || item.path === key));
  }
  getMenuItemPath(item) {
    const itemPath = this.conversionPath(item.path);
    const icon = this.getIcon(item.icon);
    const { target, name, text } = item;
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={ itemPath } target={ target }>
          { icon }
          <span>{ text }</span>
        </a>
      );
    }
    return (
      <Link
        to={ itemPath }
        //target={ target }
        //replace={ itemPath === this.props.location.pathname }
        onClick={
          this.props.isMobile ? () => {
            this.props.onCollapse(true);
          } : undefined
        }
      >
        {icon}
        <span>{ text }</span>
      </Link>
    );
  }
  getSubMenuOrItem(item) {
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = this.getNavMenuItems(item.children);
      // 当无子菜单时就不展示菜单
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  { this.getIcon(item.icon) }
                  <span>{item.text}</span>
                </span>
              ) : (
                item.text
              )
            }
            key={ item.path }
          >
            { childrenItems }
          </SubMenu>
        );
      }
      return null;
    } else {
      return <MenuItem key={ item.path }>{ this.getMenuItemPath(item) }</MenuItem>;
    }
  }
  getNavMenuItems(menusData) {
    if (!menusData) {
      return [];
    }
    return menusData.filter(item => item.name && !item.hideInMenu).map(item => {
      const ItemDom = this.getSubMenuOrItem(item);
      return this.checkPermissionItem(item.authority, ItemDom);
    }).filter(item => item);
  }
  render() {
    const { openKeys, collapsed } = this.state;
    const menuProps = collapsed ? {} : { openKeys };
    let selectedKeys = this.getSelectedMenuKeys();
    if (!selectedKeys.length) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }
    //console.log(openKeys)
    return (
      <div
        //trigger={ null }
        //collapsible
        //collapsed={collapsed}
        //onCollapse={onCollapse}
        //width={ 250 }
        style={{width: '250px',height: '100%',float: 'left',background: '#001529'}}
      >
        <div className="sider-menu-logo">
          <h1>WebApp</h1>
        </div>
        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          {...menuProps}
          onOpenChange={ this.handleOpenChange.bind(this) }
          selectedKeys={ selectedKeys }
          style={{ padding: '16px 0', width: '100%' }}
        >
          { this.getNavMenuItems(this.menus) }
        </Menu>
      </div>
    );
  }
}
export default SiderMenu;