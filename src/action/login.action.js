import history from '../utils/history';
export const loginAction = {
  login: (param) => {
    param.username = param.userName;
    return (dispatch) => {
      /*fetch('/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(param)
      }).then(response => {
        if (!response.ok) { 
          return Promise.reject(response.statusText);
        }
        return response.json();
      }).then(rs => {
        if(rs.code == 0) {
          localStorage.setItem('user', JSON.stringify({
            id: rs.data.id,
            userName: rs.data.username
          }));
          dispatch({type: "param", user: {
            id: rs.data.id,
            userName: rs.data.username
          }});
          history.push("/");
        } else {
          message.error(rs.data.msg || '用户名或密码错误');
        }
      });*/
      localStorage.setItem('user', JSON.stringify({
        id: 0,
        userName: param.username
      }));
      dispatch({type: "param", user: {
        id: 0,
        userName: param.username
      }});
      history.push("/");
    };
    /*localStorage.setItem('user', JSON.stringify(param));
    dispatch({
      type: "param",
      user: param
    });
    history.push("/");*/
  },
  _login: (param) => {
    console.log(param);
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
          history.push("/");
        });
      }
    }
    return send({
      userName: "admin",
      password: "ebcbf97ec1d80c0388d39bf508039baa",
      code: ""
    });
  },
  exit: () => {
    return (dispatch) => {
      localStorage.removeItem('user');
      dispatch({
        type: "param",
        user: null
      });
      history.push("/login");
    }
    //localStorage.removeItem('user');
    //return {type: "param", user: null};
  }
}