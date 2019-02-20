import React, { Component } from 'react';
import { Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';

class GrowInView extends Component {
  state = {
    flexAnim: new Animated.Value(0), // Initial value for flex 0
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.flexAnim, // The animated value to drive
      {
        toValue: 4, // Animate to opacity: 1 (opaque)
        duration: 5000,
      }
    ).start(Actions.init); // Starts the animation
  }

  render() {
    const { flexAnim } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          flex: flexAnim, // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export { GrowInView };
