/**
 * Swiper
 * Renders a swipable set of screens passed as children,
 * pagination indicators and a button to swipe through screens
 * or to get out of the flow when the last screen is reached
 *
 * based on https://github.com/rationalappdev/onboarding
 *
 */

import React, { Component } from 'react';
import { Dimensions, Platform, ScrollView, View } from 'react-native';
import style from './style';

// Detect screen width and height
const { width, height } = Dimensions.get('window');

export default class OnboardingScreens extends Component {
  // Props for ScrollView component
  static defaultProps = {
    // Arrange screens horizontally
    horizontal: true,
    // Hide all scroll indicators
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    // Do not bounce when the end is reached
    bounces: false,
    // Do not scroll to top when the status bar is tapped
    scrollsToTop: false,
    // Remove offscreen child views
    removeClippedSubviews: true,
    // Do not adjust content behind nav-, tab- or toolbars automatically
    automaticallyAdjustContentInsets: false,
    // Fisrt is screen is active
    index: 0,
  };

  state = this.initState(this.props);

  /**
   * Initialize the state
   */
  initState(props) {
    // Get the total number of slides passed as children
    const total = props.children ? props.children.length || 1 : 0;
    // Current index
    const index = total > 1 ? Math.min(props.index, total - 1) : 0;
    // Current offset
    const offset = width * index;

    const state = {
      total,
      index,
      offset,
      width,
      height,
    };

    // Component internals as a class property,
    // and not state to avoid component re-renders when updated
    this.internals = {
      isScrolling: false,
      offset,
    };

    return state;
  }

  componentDidMount = () => {
    const scrollView = this.refs.scrollView;
    // jump to first interval on load, so that first slide is centered
    window.setTimeout(() => {
      scrollView.scrollTo({ x: -30, y: 0, animated: false });
    }, 1);
  };

  /**
   * Scroll begin handler
   */
  onScrollBegin = () => {
    // Update internal isScrolling state
    this.internals.isScrolling = true;
  };

  /**
   * Scroll end handler
   * @param {object} e native event
   */
  onScrollEnd = e => {
    // Update internal isScrolling state
    this.internals.isScrolling = false;

    // Update index
    this.updateIndex(
      // When scrolled with .scrollTo() on Android there is no contentOffset
      e.nativeEvent.contentOffset
        ? e.nativeEvent.contentOffset.x
        : e.nativeEvent.position * this.state.width - 40
    );
  };

  /*
   * Drag end handler
   * @param {object} e native event
   */
  onScrollEndDrag = e => {
    const { contentOffset: { x: newOffset } } = e.nativeEvent;
    const { children } = this.props;
    const { index } = this.state;
    const { offset } = this.internals;

    // Update internal isScrolling state
    // if swiped right on the last slide
    // or left on the first one
    if (
      offset === newOffset &&
      (index === 0 || index === children.length - 1)
    ) {
      this.internals.isScrolling = false;
    }
  };

  /**
   * Update index after scroll
   * @param {object} offset content offset
   */
  updateIndex = offset => {
    const state = this.state;
    const diff = offset - this.internals.offset;
    const step = state.width - 40;
    let index = state.index;

    // Do nothing if offset didn't change
    if (!diff) {
      return;
    }

    // Make sure index is always an integer
    index = parseInt(index + Math.round(diff / step), 10);

    // Update internal offset
    this.internals.offset = offset;
    // Update index in the state
    this.setState({
      index,
    });
  };

  /**
   * Swipe one slide forward
   */
  swipe = () => {
    // Ignore if already scrolling or if there is less than 2 slides
    if (this.internals.isScrolling || this.state.total < 2) {
      return;
    }

    const state = this.state;
    const diff = this.state.index + 1;
    const x = diff * state.width;
    const y = 0;

    // Call scrollTo on scrollView component to perform the swipe
    this.scrollView && this.scrollView.scrollTo({ x, y, animated: true });

    // Update internal scroll state
    this.internals.isScrolling = true;

    // Trigger onScrollEnd manually on android
    if (Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff,
          },
        });
      });
    }
  };

  /**
   * Render ScrollView component
   * @param {array} slides to swipe through
   */
  renderScrollView = pages => (
    <ScrollView
      ref="scrollView"
      {...this.props}
      contentContainerStyle={[style.wrapper, this.props.style]}
      onScrollBeginDrag={this.onScrollBegin}
      onMomentumScrollEnd={this.onScrollEnd}
      onScrollEndDrag={this.onScrollEndDrag}
      horizontal={Boolean(true)}
      decelerationRate={0}
      snapToInterval={width - 60}
      snapToAlignment={'center'}
      automaticallyAdjustContentInsets={false}
      contentInset={{
        top: 0,
        left: 30,
        bottom: 0,
        right: 30,
      }}
    >
      {pages.map((page, i) => (
        // Render each slide inside a View
        <View style={style.slide} key={i}>
          {page}
        </View>
      ))}
    </ScrollView>
  );

  /**
   * Render pagination indicators
   */
  renderPagination = () => {
    if (this.state.total <= 1) {
      return null;
    }

    const ActiveDot = <View style={[style.dot, style.activeDot]} />;
    const Dot = <View style={style.dot} />;

    const dots = [];

    for (let key = 0; key < this.state.total; key++) {
      dots.push(
        key === this.state.index
          ? React.cloneElement(ActiveDot, { key }) // Active dot
          : React.cloneElement(Dot, { key }) // Other dots
      );
    }

    return (
      <View pointerEvents="none" style={style.pagination}>
        {dots}
      </View>
    );
  };

  /**
   * Render the component
   */
  render = ({ children } = this.props) => (
    <View style={style.container}>
      {/* Render screens */}
      {this.renderScrollView(children)}
      {/* Render pagination */}
      {this.renderPagination()}
    </View>
  );
}
