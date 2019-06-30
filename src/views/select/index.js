import React, { Component } from 'react';
import Select, { Option, OptGroup } from '@/components/ui/Select';
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
            <OptGroup label="a">
              <Option value="aa">aa</Option>
              <Option value="bb">bb</Option>
              <OptGroup label="a1">
                <Option value="aa1">aa1</Option>
                <Option value="bb1">bb1</Option>
              </OptGroup>
            </OptGroup>
            <Option value="cc">cc</Option>
          </Select>
        </div>
      </div>
    );
  }
}
export default User;