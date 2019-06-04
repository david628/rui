import React, { Component } from 'react';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
class User extends Component {
  state = {
    name: '',
    pwd: ''
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = (e) => {
    console.log(e.target);
    this.setState({[e.target.name]: e.target.value});
  };
  render() {
    const {name, pwd} = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <div style={{padding: '10px'}}>
          <Input type="text" name="name" value={name} onChange={this.handleChange} placeholder="请输入name"/>
        </div>
        <div style={{padding: '10px'}}>
          <Input type="password" name="pwd" value={pwd} onChange={this.handleChange} placeholder="请输入password"/>
        </div>
        <div style={{padding: '10px'}}>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    );
  }
}
export default User;