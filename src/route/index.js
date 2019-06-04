import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory'
//import { PrivateRoute } from './PrivateRoute';
import Login from '@/views/login';
import MainLayout from '@/components/Layout/MainLayout';
//import Center from '@/views/center/center';
//import Home from '../views/home/home';
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
//const customHistory = createBrowserHistory();
//console.log(customHistory);
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={
    props => {
      return localStorage.getItem('user') ? <Component { ...props } /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  } />
)
const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={ Login }/>
      <PrivateRoute path="/" component={ MainLayout } />
    </Switch>
  );
}
export default Routes;