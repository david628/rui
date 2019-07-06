import React, { Component } from 'react';
import {findDOMNode, createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import Dldh from '@/components/ui/Util/Dldh';
import Popup from './Popup';
class Dropdown extends Component {
  static propTypes = {
    sprefix: PropTypes.string,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    //trigger: PropTypes.string,
    placement: PropTypes.string,
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    showTrigger: PropTypes.any,
    hideTrigger: PropTypes.any,
    afterPopupVisibleChange: PropTypes.func
  };
  static defaultProps = {
    sprefix: 'dldh',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    trigger: [],
    //action: ['contextMenu', 'hover', 'click'],
    showTrigger: [],
    hideTrigger: [],
    //trigger: 'hover',
    placement: 'tl-bl',
    afterPopupVisibleChange: () => {},
    getDocument: () => {
      return window.document;
    }
  };
  constructor(props) {
    super(props);
    let visible;
    if ('visible' in props) {
      visible = !!props.visible;
    }
    this.prevVisible = visible;
    this.state = {
      visible
    };
  }
  componentDidMount() {
    this.componentDidUpdate({}, {
      visible: this.state.visible,
    });
  }
  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;
    if (visible !== undefined) {
      this.setState({
        visible
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const props = this.props;
    const state = this.state;
    //const listRoot = findDOMNode(this._component);
    this.prevVisible = prevState.visible;
    if (state.visible) {
      let currentDocument;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = Dldh.Event.bind(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = Dldh.Event.bind(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = Dldh.Event.bind(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = Dldh.Event.bind(window, 'blur', this.onContextMenuClose);
      }
      // if(listRoot) {
      //   Dldh.Css.addClass(listRoot, 'popup-contain-open-ative');
      //   Dldh.Css.removeClass(listRoot, 'popup-contain-hidden-ative');
      // }
      return;
    }
    // if(listRoot) {
    //   Dldh.Css.addClass(listRoot, 'popup-contain-hidden-ative');
    //   Dldh.Css.removeClass(listRoot, 'popup-contain-open-ative');
    // }
    this.clearOutsideHandler();
  }
  componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  }
  clearOutsideHandler() {
    const props = this.props;
    let currentDocument;
    if (this.clickOutsideHandler) {
      currentDocument = props.getDocument();
      this.clickOutsideHandler = Dldh.Event.unbind(currentDocument, 'mousedown', this.onDocumentClick)
    }
    if (this.touchOutsideHandler) {
      currentDocument = currentDocument || props.getDocument();
      this.touchOutsideHandler = Dldh.Event.unbind(currentDocument, 'touchstart', this.onDocumentClick);
    }
    if (this.contextMenuOutsideHandler1) {
      currentDocument = currentDocument || props.getDocument();
      this.contextMenuOutsideHandler1 = Dldh.Event.unbind(currentDocument, 'scroll', this.onContextMenuClose);
    }
    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2 = Dldh.Event.unbind(window, 'blur', this.onContextMenuClose);
    }
  }
  onDocumentClick = (event) => {
    if (this.props.mask && !this.props.maskClosable) {
      return;
    }
    const target = event.target;
    const root = findDOMNode(this);
    //if(!root.contains(target) && !findDOMNode(this._component).contains(target)) {
    if(!root.contains(target) && !this.hasPopupMouseDown) {
      this.setPopupVisible(false);
    }
  }
  onMouseEnter = (e) => {
    const { mouseEnterDelay } = this.props;
    this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  }
  onMouseLeave = (e) => {
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  }
  onClick = (e) => {
    e.preventDefault();
    if (this.isClickToHide() && this.isClickToShow()) {
      this.setPopupVisible(!this.state.visible, e);
    }
  }
  onMouseDown = (e) => {
  }
  onTouchStart = (e) => {
  }
  onFocus = (e) => {
    this.clearDelayTimer();
    if (this.isFocusToShow()) {
      this.delaySetPopupVisible(true, this.props.focusDelay);
    }
  }
  onBlur = (e) => {
    this.clearDelayTimer();
    if (this.isBlurToHide()) {
      this.delaySetPopupVisible(false, this.props.blurDelay);
    }
  }
  onContextMenu = (e) => {
    e.preventDefault();
    console.log('onContextMenu');
    this.setPopupVisible(true, e);
  }
  onContextMenuClose = () => {
    if (this.isContextMenuToShow()) {
      this.setPopupVisible(false);
    }
  }
  getContainer = () => {
    const { props } = this;
    const popupContainer = document.createElement('div');
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    //popupContainer.style.width = '100%';
    const mountNode = props.getPopupContainer ? props.getPopupContainer(findDOMNode(this)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  }
  handlePortalUpdate = () => {
    if (this.prevVisible !== this.state.visible) {
      this.props.afterPopupVisibleChange(this.state.visible);
    }
    if(this.state.visible) {
      const node = findDOMNode(this);
      const listNode = findDOMNode(this._component);
      listNode.style.width = node.offsetWidth + 'px';
      Dldh.Css.alignTo(listNode, node, this.props.placement);
    }
  }
  savePopup = (node) => {
    this._component = node;
  }
  clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  }
  delaySetPopupVisible(visible, delayS, event) {
    const delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      this.delayTimer = setTimeout(() => {
        this.setPopupVisible(visible);
        this.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible);
    }
  }
  setPopupVisible(visible) {
    //const { alignPoint } = this.props;
    this.clearDelayTimer();
    if (this.state.visible !== visible) {
      if (!('visible' in this.props)) {
        this.setState({ visible });
      }
      //this.props.onPopupVisibleChange(popupVisible);
    }
    //if (alignPoint && event) {
      //this.setPoint(event);
    //}
  }
  onPopupMouseEnter = (e) => {
    this.clearDelayTimer();
  }
  onPopupMouseLeave = (e) => {
    //if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && contains(this._component.getPopupDomNode(), e.relatedTarget)) {
      //return;
    //}
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  }
  onPopupMouseDown = (e) => {
    this.hasPopupMouseDown = true;
    clearTimeout(this.mouseDownTimeout);
    this.mouseDownTimeout = setTimeout(() => {
      this.hasPopupMouseDown = false;
    }, 0);
  }

  isClickToShow() {
    const { trigger, showTrigger } = this.props;
    return trigger.indexOf('click') !== -1 || showTrigger.indexOf('click') !== -1;
  }
  isContextMenuToShow() {
    const { trigger, showTrigger } = this.props;
    return trigger.indexOf('contextMenu') !== -1 || showTrigger.indexOf('contextMenu') !== -1;
  }
  isClickToHide() {
    const { trigger, hideTrigger } = this.props;
    return trigger.indexOf('click') !== -1 || hideTrigger.indexOf('click') !== -1;
  }
  isMouseEnterToShow() {
    const { trigger, showTrigger } = this.props;
    return trigger.indexOf('hover') !== -1 || showTrigger.indexOf('mouseEnter') !== -1;
  }
  isMouseLeaveToHide() {
    const { trigger, hideTrigger } = this.props;
    return trigger.indexOf('hover') !== -1 || hideTrigger.indexOf('mouseLeave') !== -1;
  }
  isFocusToShow() {
    const { trigger, showTrigger } = this.props;
    return trigger.indexOf('focus') !== -1 || showTrigger.indexOf('focus') !== -1;
  }
  isBlurToHide() {
    const { trigger, hideTrigger } = this.props;
    return trigger.indexOf('focus') !== -1 || hideTrigger.indexOf('blur') !== -1;
  }
  renderChildren = (child, i) => {
    const childProps = child.props;
    const props = this.props;
    const state = props.state;
    const newChildProps = {};
    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    }
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    }
    return React.cloneElement(child, newChildProps);
  };
  render() {
    const { visible } = this.state;
    const popupProps = {
      sprefix: this.props.sprefix
    };
    if (this.isMouseEnterToShow()) {
      popupProps.onMouseEnter = this.onPopupMouseEnter;
    }
    if (this.isMouseLeaveToHide()) {
      popupProps.onMouseLeave = this.onPopupMouseLeave;
    }
    popupProps.onMouseDown = this.onPopupMouseDown;
    popupProps.onTouchStart = this.onPopupMouseDown;
    let popup;
    if(visible || this._component) {
      popup = (
        <Popup
          {...popupProps}
          visible={visible}
          getContainer={this.getContainer}
          didUpdate={this.handlePortalUpdate}
          ref={this.savePopup}
        >
        {this.props.menu}
        </Popup>
      );
    }
    return (
      <React.Fragment>
      {
        React.Children.map(
          this.props.children,
          (c, i) => this.renderChildren(c, i)
        )
      }
      {popup}
      </React.Fragment>
    );
  }
}
export default Dropdown;