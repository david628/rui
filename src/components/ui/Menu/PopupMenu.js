import React, { Component } from 'react';
import PropTypes from 'prop-types';
class PopupMenu extends Component {
  static propTypes = {
    sprefix: PropTypes.string
  };
  static defaultProps = {
    className: '',
    mode: 'vertical',
    level: 1,
    inlineIndent: 24,
    visible: true,
    focusable: true,
    style: {},
    //manualRef: noop,
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentDidUpdate() {

  }
  onDeselect = (selectInfo) => {
    this.props.onDeselect(selectInfo);
  };
  onSelect = (selectInfo) => {
    this.props.onSelect(selectInfo);
  };
  onClick = (e) => {
    this.props.onClick(e);
  };
  onOpenChange = (e) => {
    this.props.onOpenChange(e);
  };
  renderMenuItem = (c, i, subMenuKey) => {
    if (!c) {
      return null;
    }
    //const props = this.props;
    //const state = props.state;
    //console.log('PopupMenu', state);
    const extraProps = {
      //openKeys: state.openKeys,
      //selectedKeys: state.selectedKeys,
      //triggerSubMenuAction: this.props.triggerSubMenuAction,
      //subMenuKey,
    };
    return this.renderCommonMenuItem(c, i, extraProps);
  };
  renderCommonMenuItem = (child, i, extraProps) => {
    //const state = this.props.store.getState();
    const props = this.props;
    const state = props.state;
    //const key = getKeyFromChildrenIndex(child, props.eventKey, i);
    const childProps = child.props;
    const key = child.key;
    const isActive = key === state.activeKey;

    const newChildProps = {
      sprefix: props.sprefix,
      mode: childProps.mode || props.mode,
      level: props.level,
      state: props.state,
      inlineIndent: props.inlineIndent,
      renderMenuItem: this.renderMenuItem,
      //rootPrefixCls: props.prefixCls,
      index: i,
      //parentMenu: props.parentMenu,
      // customized ref function, need to be invoked manually in child's componentDidMount
      //manualRef: childProps.disabled ? undefined : createChainedFunction(child.ref, saveRef.bind(this)),
      eventKey: key,
      isSelected: state.selectedKeys.indexOf(key) !== -1,
      isOpen: state.openKeys.indexOf(key) > -1,
      active: !childProps.disabled && state.selectedKeys.indexOf(key) !== -1,
      multiple: props.multiple,
      onClick: (e) => {
        (childProps.onClick || function(){})(e);
        this.onClick(e);
      },
      //onItemHover: this.onItemHover,
      //openTransitionName: this.getOpenTransitionName(),
      //openAnimation: props.openAnimation,
      //subMenuOpenDelay: props.subMenuOpenDelay,
      //subMenuCloseDelay: props.subMenuCloseDelay,
      //forceSubMenuRender: props.forceSubMenuRender,
      onOpenChange: this.onOpenChange,
      onDeselect: this.onDeselect,
      onSelect: this.onSelect,
      //builtinPlacements: props.builtinPlacements,
      //itemIcon: childProps.itemIcon || this.props.itemIcon,
      //expandIcon: childProps.expandIcon || this.props.expandIcon,
      ...extraProps,
    };
    //if (props.mode === 'inline' || isMobileDevice()) {
    if (props.mode === 'inline') {
      newChildProps.triggerSubMenuAction = 'click';
    }
    //let element = React.cloneElement(child, newChildProps);
    //console.log('PopupMenu', state.openKeys, state.selectedKeys, newChildProps);
    //console.log(element);
    return React.cloneElement(child, newChildProps);
  };
  render() {
    let { ...props } = this.props;
    const sprefix = props.sprefix;
    let className = [`${sprefix}-menu`];
    if(props.subClassName !== '') {
      className.push(props.subClassName);
    }
    if(props.hiddenClassName !== '') {
      className.push(props.hiddenClassName);
    }
    return (
      <ul className={className.join(' ')}>
        {
          React.Children.map(
            props.children,
            (c, i) => this.renderMenuItem(c, i)
          )
        }
        
      </ul>
    );
  }
}
export default PopupMenu;