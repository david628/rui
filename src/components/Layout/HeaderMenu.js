import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropdown from '@/components/ui/Dropdown';
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
    const triggerList = (
      <div style={{
        width: '70px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
      }}>
        <a href="javascript:;" onClick={this.onMenuClick} style={{fontSize: '13px', lineHeight: '60px',padding: '0 10px',display: 'inline-block',textDecoration: 'none',color: 'rgba(0, 0, 0, 0.65)'}}>退出</a>
      </div>
    );
    return (
      <div className="header-menu">
        <div style={{position: 'absolute',right: 0,top: '20px',padding: '0 20px',height: '100%'}}>
          <Dropdown menu={triggerList} trigger="hover"><span style={{padding: '0 10px'}}>{ user && user.userName ? user.userName : "登录" }</span></Dropdown>
        </div>
      </div>
    );
  }
}
export default HeaderMenu;