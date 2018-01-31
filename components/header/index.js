import React from 'react';

import PropTypes from 'prop-types'; // Supported builtin module

import ScreenOneHeader from './one';
import ScreenTwoHeader from './two';
import ScreenThreeHeader from './three';

export const headerTypes = {
  ScreenOne: 'ScreenOne',
  ScreenTwo: 'ScreenTwo',
  ScreenThree: 'ScreenThree',
};

class Header extends React.Component {
  render() {
    const { type } = this.props;
    let header = <ScreenOneHeader {...this.props} />;
    if (type === headerTypes.ScreenTwo) {
      header = <ScreenTwoHeader {...this.props} />;
    } else if (type === headerTypes.ScreenThree) {
      header = <ScreenThreeHeader {...this.props} />;
    }
    return header;
  }
}

Header.propTypes = {
  type: PropTypes.oneOf([
    headerTypes.ScreenOne,
    headerTypes.ScreenTwo,
    headerTypes.ScreenThree,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Header;
