import React, { Component } from 'react';
import Button from '@/components/ui/Button';
class User extends Component {
  state = {
    href: undefined
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  onClick = (arg) => {
    this.setState({
      href: this.state.href == undefined ? 'www.baidu.com' : undefined
    });
    console.log(arg);
  };
  render() {
    return (
      <div>
        <div style={{padding: '10px'}}>
          <Button.Group>
            <Button disabled>Group</Button>
            <Button>Group</Button>
            <Button>Group</Button>
            <Button>Group</Button>
            <Button>Group</Button>
          </Button.Group>
        </div>
        <div style={{padding: '10px'}}>
          <Button
            href={this.state.href}
            target="_blank"
            onClick={this.onClick}
          >
          onClick
          </Button>
        </div>
        <div style={{padding: '10px'}}>
          <Button
            onClick={this.onClick}
            disabled
          >
          disabled
          </Button>
        </div>
        <div style={{padding: '10px'}}>
          <Button
            href="www.baidu.com"
            target="_blank"
          >
          href target
          </Button>
        </div>
        <div style={{padding: '10px'}}>
          <Button
            type="reset"
          >
          type
          </Button>
        </div>
        <div style={{padding: '10px'}}>
          <Button
            shape="circle"
          >
          shape
          </Button>
        </div>
        <div style={{padding: '10px'}}>
          <Button
            size="large"
          >
          size
          </Button>
        </div>
      </div>
    );
  }
}
export default User;