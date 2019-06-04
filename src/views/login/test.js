import React, { Component } from 'react';

//import { Link } from 'react-router-dom';
export default class Test extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <center>
        <div>{this.props.userName}</div>
      </center>
    );
  }
}