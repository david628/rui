import React, { Component } from 'react';
import Checkbox from '@/components/ui/Checkbox';
class User extends Component {
  state = {
    checked: true
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  handleChange = (e) => {
    //this.setState({[e.target.name]: e.target.value});
    const {checked} = this.state;
    this.setState({
      checked: !checked
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div style={{padding: '10px'}}>
          <Checkbox
            value="100"
            name="is"
            checked={this.state.checked}
            onChange={this.handleChange}
          >
          size
          </Checkbox>
        </div>
      </div>
    );
  }
}
export default User;