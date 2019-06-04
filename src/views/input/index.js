import React, { Component } from 'react';
import Input from '@/components/ui/Input';
class User extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <div style={{padding: '10px'}}>
          <Input placeholder="请输入"/>
        </div>
        <div style={{padding: '10px'}}>
          <Input type="textarea" placeholder="请输入"/>
        </div>
      </div>
    );
  }
}
export default User;
