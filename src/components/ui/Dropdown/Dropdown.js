import React, { Component } from 'react';
import {findDOMNode, createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import Dldh from '@/components/ui/Util/Dldh';
import Popup from './Popup';
class Dropdown extends Component {
  static propTypes = {
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    afterPopupVisibleChange: PropTypes.func
  };
  static defaultProps = {
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
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
    this.prevVisible = prevState.visible;
  }
  componentWillUnmount() {
    console.log('out');
  }
  
  onMouseEnter = (e) => {
    console.log('onMouseEnter', e.currentTarget);
    const { mouseEnterDelay } = this.props;
    this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };
  onMouseLeave = (e) => {
    console.log('onMouseLeave', e.currentTarget);
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  };
  onClick = (e) => {
    //console.log(findDOMNode(this));
    //Dldh.Css.alignTo(this.body, findDOMNode(this), 'tl-bl');
  }
  onMouseDown = (e) => {
    console.log('onMouseDown');
    this.preClickTime = Date.now();
  }
  onTouchStart = (e) => {
    console.log('onTouchStart');
    this.preTouchTime = Date.now();
  }
  renderChildren = (child, i) => {
    const childProps = child.props;
    const props = this.props;
    const state = props.state;
    //console.log(childProps);
    const newChildProps = {};
    newChildProps.onMouseEnter = (e) => {
      this.onMouseEnter(e);
    }
    newChildProps.onMouseLeave = (e) => {
      this.onMouseLeave(e);
    }
    newChildProps.onClick = (e) => {
      this.onClick(e);
    }
    newChildProps.onMouseDown = this.onMouseDown;
    newChildProps.onTouchStart = this.onTouchStart;
    //console.log(React.cloneElement(child, newChildProps));
    return React.cloneElement(child, newChildProps);
  };
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
      Dldh.Css.alignTo(findDOMNode(this._component), findDOMNode(this), 'tl-bl');
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
    console.log(!('visible' in this.props));
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
    console.log('onPopupMouseEnter...');
    this.clearDelayTimer();
  }
  onPopupMouseLeave = (e) => {
    console.log('onPopupMouseLeave...');
    console.log(e.relatedTarget);
    //if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && contains(this._component.getPopupDomNode(), e.relatedTarget)) {
      //return;
    //}
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  }
  onPopupMouseDown = (e) => {
    console.log('onPopupMouseDown...');
  }
  render() {
    const { visible } = this.state;
    const mouseProps = {};
    //if (this.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = this.onPopupMouseEnter;
    //}
    //if (this.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = this.onPopupMouseLeave;
    //}
    mouseProps.onMouseDown = this.onPopupMouseDown;
    mouseProps.onTouchStart = this.onPopupMouseDown;
    let popup;
    console.log('render', visible);
    if(visible || this._component) {
      popup = (
        <Popup
          {...mouseProps}
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