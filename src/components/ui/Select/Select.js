import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '@/components/ui/Dropdown';
class Select extends Component {
  static propTypes = {
  };
  static defaultProps = {

  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
  }
  componentDidUpdate() {

  }
  render() {
    const menu = (
      <div className="dldh-select-dropdown" style={{width: '120px'}}>
        <div>
          <ul className="dldh-select-dropdown-menu">
            <li className="dldh-select-dropdown-menu-item">0</li>
            <li className="dldh-select-dropdown-menu-item">1</li>
            <li className="dldh-select-dropdown-menu-item">2</li>
            <li className="dldh-select-dropdown-menu-item">3</li>
            <li className="dldh-select-dropdown-menu-item">4</li>
            <li className="dldh-select-dropdown-menu-item">5</li>
          </ul>
        </div>
      </div>
    );
    return (
      <Dropdown menu={menu} trigger={["click"]}>
        <div className="dldh-select">
          <div className="dldh-select-selection ant-select-selection--multiple">
            <div className="dldh-select-selection__rendered">
              <div className="dldh-select-selection__placeholder" unselectable="unselectable" style={{display: 'block'}}>Please select</div>
              <ul className="dldh-select-ul">
                <li className="dldh-select-search dldh-select-search--inline">
                  <div className="dldh-select-search__field__wrap">
                    <input className="dldh-select-search__field"/>
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