import React from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';
import { Feather } from '@expo/vector-icons';

interface RotatableChevronIconProps {
}
interface RotatableChevronIconState {
  isRotated: boolean
}
const AnimatedIcon = Animated.createAnimatedComponent(Feather);

class RotatableChevronIcon extends React.Component{
  animatedValue: Animated.Value = new Animated.Value(0);
  state: RotatableChevronIconState = {
    isRotated: false
  };

  constructor(props: RotatableChevronIconProps) {
    super(props);
  }

  public rotate = () => {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
  };

  public rotateBack = () => {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
  };

  render() {
    const rotateStyle = this.animatedValue.interpolate({inputRange: [0, 1], outputRange: ['0deg', '-90deg']});
    return (
      <AnimatedIcon name="chevron-left" size={24} color='gray' style={[styles.icon, {transform: [{ rotate: rotateStyle }]}]}/>
    );
  }
};

const styles = StyleSheet.create({
  icon: {
    // borderColor: 'gray',
    // borderWidth: 1,
    paddingTop: 2,
  }
});

export default RotatableChevronIcon;