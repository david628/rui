import React, { Component } from 'react';
import Select from '@/components/ui/Select';
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
          <Select
          >
          Select
          </Select>
        </div>
      </div>
    );
  }
}
export default User;