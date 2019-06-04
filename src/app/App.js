import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
//import logo from './logo.svg';
//import { PrivateRoute } from '../components/PrivateRoute';
import Routes from '../route';
//import './App.css';
//import MainLayout from '../components/Layout';

//import LoginLayout from '../components/Layout/LoginLayout';
//import MainLayout from '../components/Layout/MainLayout';


/*const HomePage = () => {
  return <div>首页面</div>;
}
const LoginPage = () => {
  return <div>登录页面</div>;
}
const RegisterPage = () => {
  return <div>注册页面</div>;
}
const CPage = () => {
  return <div>c页面</div>;
}*/
export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-router">
        <Router>
          <Routes/>
        </Router>
      </div>
    );
    /*const {count, click} = this.props;
    return (
      <div className="App">
        <div style={{display: "none"}}><button type="button" onClick={click}>测试</button>{count}</div>
        <Routes/>
      </div>
    );*/
  }
}
/*const mapStateToProps = (state, ownProps) => {
  return {count: state.app.count};
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (args) => {
      dispatch({type: "changeCount", count: 100})
    }
  }
}
const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export {connectedApp as App} ;*/
