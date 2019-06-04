import React, { Component } from 'react';
import {findDOMNode, createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import Dldh from '@/components/ui/Util/Dldh';
class Dropdown extends Component {
  static propTypes = {
    
  };
  static defaultProps = {
    
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.body = this.getBody();
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    
  }
  componentDidUpdate() {

  }
  getBody = () => {
    let body = document.createElement('div');
    body.className = `dldh-dropdown-menu`;
    document.body.appendChild(body);
    return body;
  };
  handleMouseOver = (e) => {
    //this.body.style.display = '';
    Dldh.Css.alignTo(this.body, findDOMNode(this), 'tl-bl');
  };
  handleMouseOut = (e) => {
    //this.body.style.display = 'none';
  };
  handleClick = (e) => {
    //console.log(findDOMNode(this));
    Dldh.Css.alignTo(this.body, findDOMNode(this), 'tl-bl');
  }
  renderChildren = (child, i) => {
    const childProps = child.props;
    const props = this.props;
    const state = props.state;
    //console.log(childProps);
    const newChildProps = {
      //body: this.getBody(),
      onMouseOver: (e) => {
        this.handleMouseOver(e);
      },
      onMouseOut: (e) => {
        this.handleMouseOut(e);
      },
      onClick: (e) => {
        this.handleClick(e);
      }
    };
    //console.log(React.cloneElement(child, newChildProps));
    return React.cloneElement(child, newChildProps);
  };
  renderMenu = () => {
    const { children, menu } = this.props;
    const { open } = this.state;
    //const ariaOptions = this.getDropdownMenuAriaOptions()
    //return cloneElement(menuChild, { className, ...ariaOptions })
    return createPortal(menu, this.body);
  };
  render() {
    return (
      <React.Fragment>
      {
        React.Children.map(
          this.props.children,
          (c, i) => this.renderChildren(c, i)
        )
      }

      </React.Fragment>
    );
  }
}
export default Dropdown;