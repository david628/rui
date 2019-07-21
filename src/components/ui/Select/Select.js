import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '@/components/ui/Dropdown';
import Menu, { Item as MenuItem, ItemGroup as MenuItemGroup } from '@/components/ui/Menu';
class Select extends Component {
  static propTypes = {
  };
  static defaultProps = {

  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      inputValue: '',
      value: ''
    }
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
  }
  componentDidUpdate() {
//R_@WjQF692$E#T@H
  }
  getValuePropValue(child) {
    if (!child) {
      return null;
    }
    const props = child.props;
    if ('value' in props) {
      return props.value;
    }
    if (child.key) {
      return child.key;
    }
    if (child.type && child.type.isSelectOptGroup && props.label) {
      return props.label;
    }
    //throw new Error(`Need at least a key or a value or a label (only for OptGroup) for ${child}`);
  }

  getOptions = (children, childrenKeys, menuItems) => {
    let options = [];
    React.Children.forEach(children, child => {
      if (!child) {
        return;
      }
      if (child.type.isSelectOptGroup) {
        let label = child.props.label;
        let key = child.key;
        if (!key && typeof label === 'string') {
          key = label;
        } else if (!label && key) {
          label = key;
        }
        const innerItems = this.getOptions(
          child.props.children,
          childrenKeys,
          menuItems
        );
        if (innerItems.length) {
          options.push(
            <MenuItemGroup key={key} title={label}>
              {innerItems}
            </MenuItemGroup>
          );
        }
      } else {
        const childValue = this.getValuePropValue(child);
        const menuItem = (
          <MenuItem
            value={childValue}
            key={childValue}
            role="option"
            {...child.props}
          />
        );
        menuItems.push(menuItem);
        options.push(menuItem);
      }
    });
    return options;
  };
  setInputValue(inputValue) {
    if (inputValue !== this.state.inputValue) {
      this.setState(
        {
          inputValue
        }
      );
    }
  }
  onInputChange = (event) => {
    const v = event.target.value;
    this.setInputValue(v);
    this.setState({
      open: true,
    });
  }
  render() {
    const { props, state } = this;
    const menuItems = [];
    const childrenKeys = [];
    const sprefix = `dldh-select`;
    let hidden = false;
    if (state.inputValue) {
      hidden = true;
    }
    if (state.value.length) {
      hidden = true;
    }
    const menu = (
      <Menu
        sprefix={`${sprefix}-dropdown`}
      >
        {this.getOptions(this.props.children, childrenKeys, menuItems)}
      </Menu>
    );
    return (
      <Dropdown sprefix={sprefix} menu={menu} trigger={["click"]}>
        <div className="dldh-select">
          <div className="dldh-select-selection ant-select-selection--multiple">
            <div className="dldh-select-selection__rendered">
              <div className="dldh-select-selection__placeholder" unselectable="unselectable" style={{display: hidden ? 'none' : 'block'}}>Please select</div>
              <ul className="dldh-select-ul">
                <li className="dldh-select-search dldh-select-search--inline">
                  <div className="dldh-select-search__field__wrap">
                    <input className="dldh-select-search__field" onChange={this.onInputChange}/>
                    <span className="dldh-select-search__field__mirror"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Dropdown>
    );
  }
}
export default Select;