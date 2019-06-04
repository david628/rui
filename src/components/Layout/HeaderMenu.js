import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction } from '../../action/login.action';
import './HeaderMenu.less';

@connect(
  state => state.login,
  dispatch => bindActionCreators(loginAction, dispatch)
)
class HeaderMenu extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  onMenuClick = (e) => {
    //if(e.key === 'logout') {
      this.props.exit();
    //}
  };
  render() {
    const { exit, user } = this.props;
    const collapsed = false;
    return (
      <div className="header-menu">
        <div style={{position: 'absolute',right: 0,top: 0,padding: '0 20px',height: '100%'}}>
          <span style={{padding: '0 10px'}}>{ user && user.userName ? user.userName : "登录" }</span>
          <a href="javascript:;" onClick={this.onMenuClick} style={{lineHeight: '60px',padding: '0 10px',display: 'inline-block',textDecoration: 'none',color: 'rgba(0, 0, 0, 0.65)'}}>退出</a>
        </div>
      </div>
    );
  }
}
export default HeaderMenu;