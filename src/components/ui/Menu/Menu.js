import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopupMenu from './PopupMenu';
class Menu extends Component {
  static propTypes = {
    sprefix: PropTypes.string,
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
    // defaultActiveFirst: PropTypes.bool,
    selectedKeys: PropTypes.arrayOf(PropTypes.string),
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
    openKeys: PropTypes.arrayOf(PropTypes.string),
    // mode: PropTypes.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
    // getPopupContainer: PropTypes.func,
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onDestroy: PropTypes.func,
    // openTransitionName: PropTypes.string,
    // openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    // subMenuOpenDelay: PropTypes.number,
    // subMenuCloseDelay: PropTypes.number,
    // forceSubMenuRender: PropTypes.bool,
    // triggerSubMenuAction: PropTypes.string,
    level: PropTypes.number,
    selectable: PropTypes.bool,
    multiple: PropTypes.bool,
    // children: PropTypes.any,
    // className: PropTypes.string,
    style: PropTypes.object,
    activeKey: PropTypes.string,
    // prefixCls: PropTypes.string,
    // builtinPlacements: PropTypes.object,
    // itemIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    // expandIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    // overflowedIndicator: PropTypes.node,
  };
  static defaultProps = {
    level: 1,
    sprefix: 'dldh',
    selectable: true,
    onClick: function() {},
    onSelect: function() {},
    onOpenChange: function() {},
    onDeselect: function() {},
    defaultSelectedKeys: [],
    defaultOpenKeys: [],
    // subMenuOpenDelay: 0.1,
    // subMenuCloseDelay: 0.1,
    // triggerSubMenuAction: 'hover',
    // prefixCls: 'rc-menu',
    // className: '',
    mode: 'vertical',
    style: {},
    // builtinPlacements: {},
    // overflowedIndicator: <span>···</span>,
  };
  constructor(props) {
    super(props);
    let selectedKeys = props.defaultSelectedKeys;
    let openKeys = props.defaultOpenKeys;
    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }
    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }
    this.state = {
      selectedKeys,
      openKeys
    };
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    const { selectedKeys, openKeys } = nextProps;
    this.setState({
      selectedKeys: selectedKeys || [],
      openKeys: openKeys || []
    });
  }
  componentDidUpdate() {

  }
  onClick = (e) => {
    this.props.onClick(e);
  };
  onSelect = (selectInfo) => {
    const props = this.props;
    if (props.selectable) {
      // root menu
      let { selectedKeys } = this.state;
      const selectedKey = selectInfo.key;
      if (props.multiple) {
        selectedKeys = selectedKeys.concat([selectedKey]);
      } else {
        selectedKeys = [selectedKey];
      }
      if (!('selectedKeys' in props)) {
        this.setState({
          selectedKeys
        });
      }
      props.onSelect({
        ...selectInfo,
        selectedKeys
      });
    }
  };
  onDeselect = (selectInfo) => {
    const props = this.props;
    if (props.selectable) {
      const selectedKeys = this.state.selectedKeys.concat();
      const selectedKey = selectInfo.key;
      const index = selectedKeys.indexOf(selectedKey);
      if (index !== -1) {
        selectedKeys.splice(index, 1);
      }
      if (!('selectedKeys' in props)) {
        this.store.setState({
          selectedKeys
        });
      }
      props.onDeselect({
        ...selectInfo,
        selectedKeys,
      });
    }
  }
  onOpenChange = (event) => {
    const props = this.props;
    const { openKeys } = this.state;
    let changed = false;
    const processSingle = (e) => {
      let oneChanged = false;
      if (e.open) {
        oneChanged = openKeys.indexOf(e.key) === -1;
        if (oneChanged) {
          openKeys.push(e.key);
        }
      } else {
        const index = openKeys.indexOf(e.key);
        oneChanged = index !== -1;
        if (oneChanged) {
          openKeys.splice(index, 1);
        }
      }
      changed = changed || oneChanged;
    };
    if (Array.isArray(event)) {
      // batch change call
      event.forEach(processSingle);
    } else {
      processSingle(event);
    }
    if (changed) {
      if (!('openKeys' in this.props)) {
        this.setState({ openKeys });
      }
      props.onOpenChange(openKeys);
    }
  };
  render() {
    let { ...props } = this.props;
    let { ...state } = this.state;
    let sprefix = props.sprefix;
    props = {
      ...props,
      state,
      subClassName: `${sprefix}-menu-inline ${sprefix}-menu-dark`,
      onClick: this.onClick,
      onOpenChange: this.onOpenChange,
      onDeselect: this.onDeselect,
      onSelect: this.onSelect,
      //openTransitionName: this.getOpenTransitionName(),
      //parentMenu: this,
    };
    return (
      <PopupMenu {...props}>
        {this.props.children}
      </PopupMenu>
    );
  }
}
export default Menu;