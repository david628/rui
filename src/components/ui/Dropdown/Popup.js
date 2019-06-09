import React, { Component } from 'react';
import ReactDOM, {findDOMNode, createPortal} from 'react-dom';
import PropTypes from 'prop-types';
class Popup extends Component {
  static propTypes = {
    getContainer: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    didUpdate: PropTypes.func
  };
  static defaultProps = {
    
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  	this.createContainer();
  	console.log('start');
  }
  componentWillReceiveProps(nextProps) {

  }
  componentDidUpdate(prevProps) {
    var didUpdate = this.props.didUpdate;
    if (didUpdate) {
      console.log('componentDidUpdate');	
      didUpdate(prevProps);
    }
  }
  componentWillUnmount() {
  	this.removeContainer();
  }
  createContainer = () => {
  	this._container = this.props.getContainer();
    this.forceUpdate();
  }
  removeContainer = () => {
  	if (this._container) {
      this._container.parentNode.removeChild(this._container);
    }
  }
  render() {
  	if (this._container) {
  	  //this._container.className = this.props.visible ? 'popup-contain' : 'popup-contain popup-contain-hidden';
      return ReactDOM.createPortal(
      	<div className={this.props.visible ? 'popup-contain' : 'popup-contain popup-contain-hidden'}>{this.props.children}</div>, 
      	this._container
      );
    }
    return null;
  }
}
export default Popup;