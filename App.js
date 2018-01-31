import React, { Component } from 'react';
import MainScreen from './containers/MainScreen';

const defaultProps = {
  screen: 'MainScreen',
  title: 'Upgrade to Premium to enjoy…',
  subtitle: 'For a limited time',
  subscriptionTitle: 'Subscription Terms',
};

export default class App extends Component {
  render() {
    return <MainScreen {...defaultProps} />;
  }
}
