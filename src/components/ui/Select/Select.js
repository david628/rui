import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    return (
      <div className="dldh-select">
        <div className="dldh-select-selection">
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
    );
  }
}
export default Select;