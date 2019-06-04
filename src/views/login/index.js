import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './index.less';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { loginAction } from '../../action/login.action';
/*function send(user) {
  return function(dispatch) {
    fetch('service/system/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => {
      if (!response.ok) { 
        return Promise.reject(response.statusText);
      }
      return response.json();
    }).then(rs => {
      if(rs.ret) {
        localStorage.setItem('user', JSON.stringify(user));          
      }
      dispatch({type: "login", user: user});
      history.push("/home");
    });
  }
}
@connect(
  state => state.login,
  dispatch => ({
    login: (args) => {
      dispatch(send({
        userName: "admin",
        password: "ebcbf97ec1d80c0388d39bf508039baa",
        code: ""
      }));
    },
    loginOut: (args) => {
      localStorage.removeItem('user');
      dispatch({type: "login", user: null})
    }
  })
)*/
/*let action = {
  login: (args) => {
    let send = (user) => {
      return (dispatch) => {
        fetch('service/system/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }).then(response => {
          if (!response.ok) { 
            return Promise.reject(response.statusText);
          }
          return response.json();
        }).then(rs => {
          if(rs.ret) {
            localStorage.setItem('user', JSON.stringify(user));          
          }
          dispatch({type: "param", user: user});
          history.push("/home");
        });
      }
    }
    return send({
      userName: "admin",
      password: "ebcbf97ec1d80c0388d39bf508039baa",
      code: ""
    });
  },
  loginOut: (args) => {
    return {type: "param", user: null};
  }
}*/
@connect(
  state => state.login,
  dispatch => bindActionCreators(loginAction, dispatch)
)
class Login extends Component {
  state = {
    userName: '',
    password: ''
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  handleChange = (e) => {
    console.log(e.target);
    this.setState({[e.target.name]: e.target.value});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {userName, password} = this.state;
    this.props.login({
      userName: userName,
      password: password
    });
  }
  render() {
    const {userName, password} = this.state;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <div style={{padding: '10px'}}>
            <Input type="text" name="userName" value={userName} onChange={this.handleChange} placeholder="请输入name"/>
          </div>
          <div style={{padding: '10px'}}>
            <Input type="password" name="password" value={password} onChange={this.handleChange} placeholder="请输入password"/>
          </div>
          <div style={{padding: '10px'}}>
            <Button type="submit">Login In</Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default Login;

/*function mapStateToProps(state) {
  const {user} = state.login;
  return {
    user
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: (args) => {
      //localStorage.setItem('user', 100);
      //dispatch({type: "login", user: 100}); 
      //this.props.history.push("/");
      //window.location.href = "/";
      dispatch(send({
        userName: "admin",
        password: "ebcbf97ec1d80c0388d39bf508039baa",
        code: ""
      }));
    },
    loginOut: (args) => {
      localStorage.removeItem('user');
      dispatch({type: "login", user: null})
    }
  }
}
function send(user) {
  return function(dispatch) {
    fetch('service/system/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => {
      if (!response.ok) { 
        return Promise.reject(response.statusText);
      }
      return response.json();
    }).then(rs => {
      if(rs.ret) {
        localStorage.setItem('rs', JSON.stringify(user));          
      }
      dispatch({type: "login", user: user});
      history.push("/");
    });
  }
}
const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
export default connectedLoginPage;*/
