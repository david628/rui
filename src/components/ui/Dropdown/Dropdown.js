import React, { Component } from 'react';
import {findDOMNode, createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import Dldh from '@/components/ui/Util/Dldh';
import Popup from './Popup';
class Dropdown extends Component {
  static propTypes = {
    afterPopupVisibleChange: PropTypes.func
  };
  static defaultProps = {
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

  }
  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;
    if (visible !== undefined) {
      this.setState({
        visible
      });
    }
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {
    console.log('out');
  }
  
  handleMouseEnter = (e) => {
    console.log('handleMouseEnter');
    this.setState({
      visible: true
    });
    //this.body.style.display = '';
    //Dldh.Css.alignTo(this.body, findDOMNode(this), 'tl-bl');
  };
  handleMouseLeave = (e) => {
    console.log('handleMouseLeave');
    this.setState({
      visible: false
    });
    //this.body.style.display = 'none';
  };
  handleClick = (e) => {
    //console.log(findDOMNode(this));
    //Dldh.Css.alignTo(this.body, findDOMNode(this), 'tl-bl');
  }
  renderChildren = (child, i) => {
    const childProps = child.props;
    const props = this.props;
    const state = props.state;
    //console.log(childProps);
    const newChildProps = {
      //body: this.getBody(),
      onMouseEnter: (e) => {
        this.handleMouseEnter(e);
      },
      onMouseLeave: (e) => {
        this.handleMouseLeave(e);
      },
      onClick: (e) => {
        this.handleClick(e);
      }
    };
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
      Dldh.Css.alignTo(findDOMNode(this._component), findDOMNode(this), 'tl-bl');
      this.props.afterPopupVisibleChange(this.state.visible);
    }
  }
  savePopup = (node) => {
    this._component = node;
  }
  render() {
    const { visible } = this.state;
    let popup;
    if(visible || this._component) {
      popup = (
        <Popup
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