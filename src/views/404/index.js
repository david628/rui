import React, { Component } from 'react';
//import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
//import { Link } from 'react-router-dom';
/*const RegisterPage = () => {
  return <div>注册页面</div>;
}
const A = () => {
  return <div>A页面</div>;
}*/
class NOTFOUND extends Component {
  constructor(props) {
    super(props);
    //console.log(123);
  }
  componentDidMount() {
  }
  afterOnClick(pathname) {
    //this.props.history.push("/home/" + pathname);
  }
  render() {
    return (
      <h1>404</h1>
    );
  }
}
export default NOTFOUND;
