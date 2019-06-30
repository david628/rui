import React, { Component } from 'react';
import Menu, { SubMenu, ItemGroup, Item as MenuItem, Divider } from '@/components/ui/Menu';
class User extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
  }
  state = {
    openKeys: [],
    selectedKeys: []
  };
  onSelect = (info) => {
    let { selectedKeys } = info;
    //console.log('selectedKeys ', selectedKeys);
    this.setState({
      selectedKeys
    });
  };
  onDeselect = (info) => {
    console.log('deselect ', info);
  };
  onOpenChange = (openKeys) => {
    //console.log('onOpenChange', openKeys);
    this.setState({
      openKeys
    });
  }
  render() {
    // return (
    //   <Menu
    //     onSelect={this.onSelect}
    //     onDeselect={this.onDeselect}
    //     onOpenChange={this.onOpenChange}
    //     openKeys={this.state.openKeys}
    //     selectedKeys={this.state.selectedKeys}
    //   >
    //     <SubMenu
    //       key="sub1"
    //       title={
    //         <span>
    //           <span>Navigation One</span>
    //         </span>
    //       }
    //     >
    //       <Menu.ItemGroup key="g1" title="Item 1">
    //         <Menu.Item key="1">Option 1</Menu.Item>
    //         <Menu.Item key="2">Option 2</Menu.Item>
    //       </Menu.ItemGroup>
    //       <Menu.ItemGroup key="g2" title="Item 2">
    //         <Menu.Item key="3">Option 3</Menu.Item>
    //         <Menu.Item key="4">Option 4</Menu.Item>
    //       </Menu.ItemGroup>
    //     </SubMenu>
    //     <SubMenu
    //       key="sub2"
    //       title={
    //         <span>
    //           <span>Navigation Two</span>
    //         </span>
    //       }
    //     >
    //       <Menu.Item key="5">Option 5</Menu.Item>
    //       <Menu.Item key="6">Option 6</Menu.Item>
    //       <SubMenu key="sub3" title="Submenu">
    //         <Menu.Item key="7">Option 7</Menu.Item>
    //         <Menu.Item key="8">Option 8</Menu.Item>
    //       </SubMenu>
    //     </SubMenu>
    //     <SubMenu
    //       key="sub4"
    //       title={
    //         <span>
    //           <span>Navigation Three</span>
    //         </span>
    //       }
    //     >
    //       <Menu.Item key="9">Option 9</Menu.Item>
    //       <Menu.Item key="10">Option 10</Menu.Item>
    //       <Menu.Item key="11">Option 11</Menu.Item>
    //       <Menu.Item key="12">Option 12</Menu.Item>
    //     </SubMenu>
    //   </Menu>
    // );
    return (
      <Menu
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
        onOpenChange={this.onOpenChange}
        openKeys={this.state.openKeys}
        selectedKeys={this.state.selectedKeys}
      >
        <SubMenu key="1" title={<span><span>导航1</span></span>}>
          <MenuItem key="1-1">选项1</MenuItem>
          <MenuItem key="1-2">选项2</MenuItem>
          <MenuItem key="1-3">选项3</MenuItem>
          <MenuItem key="1-4">选项4</MenuItem>
        </SubMenu>
        <SubMenu key="2" title={<span><span>导航2</span></span>}>
          <MenuItem key="2-1">选项5</MenuItem>
          <MenuItem key="2-2">选项6</MenuItem>
          <SubMenu key="2-3" title="三级导航">
            <MenuItem key="2-3-1">选项7</MenuItem>
            <MenuItem key="2-3-2">选项8</MenuItem>
            <SubMenu key="2-3-3" title={<span>4级导航</span>}>
              <MenuItem key="2-3-3-1">选项13</MenuItem>
              <MenuItem key="2-3-3-2">选项14</MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
        <SubMenu key="3" title={<span><span>导航3</span></span>}>
          <MenuItem key="3-1">选项9</MenuItem>
          <MenuItem key="3-2">选项10</MenuItem>
          <MenuItem key="3-3">选项11</MenuItem>
          <MenuItem key="3-4">选项12</MenuItem>
        </SubMenu>
      </Menu>
    );
  }
}
export default User;
