import React from 'react';
import {
  View,
  Dimensions,
  Animated,
  PanResponder,
  Easing,
  StyleSheet, PanResponderInstance, PanResponderGestureState, TouchableOpacity
} from 'react-native';

interface SwipeableListItemProps {
  id: string;
  message: string;
  cleanFromScreen: (id: string) => void;
  swipingCheck: (isEnabled: boolean) => void;
  onPress?: () => void;
  renderMainItem: () => JSX.Element;
  renderLeftItem: (isOpening: boolean, isSwipeComplete: boolean) => JSX.Element;
  renderRightItem: () => JSX.Element;
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const RIGHT_BUTTON_THRESHOLD = SCREEN_WIDTH / 15;
const FORCE_TO_OPEN_THRESHOLD = SCREEN_WIDTH / 4;
const FORCING_DURATION = 350;
const SCROLL_THRESHOLD = SCREEN_WIDTH / 15;

class SwipeableListItem extends React.Component<SwipeableListItemProps> {

  position: Animated.ValueXY;
  scrollStopped: boolean;
  panResponder: PanResponderInstance;
  scrollView: boolean = false;
  state = {isOpening: false, isSwipeComplete: false};

  constructor(props:SwipeableListItemProps) {
    super(props);

    const position = new Animated.ValueXY({x: 0, y: 0});
    this.scrollStopped = false;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false, // we don't want the item to be animated with a touch
      onMoveShouldSetPanResponder: () => true, // we want to animate the item with a movement
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        this.position.setOffset({ x: this.position.x._value, y: 0 }); // we specify the offset to continue swiping from the place where user left.
        this.position.setValue({ x: 0, y: 0 }); // clearing the position
      },
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx >= SCROLL_THRESHOLD) {
          this.enableScrollView(true);
          const x = gesture.dx - SCROLL_THRESHOLD;
          this.position.setValue({ x, y: 0 });
          this.setState({isOpening: true, isSwipeComplete: x > FORCE_TO_OPEN_THRESHOLD});
        } else if (gesture.dx <= -SCROLL_THRESHOLD) {
          this.enableScrollView(true);
          const x = gesture.dx + SCROLL_THRESHOLD;
          this.position.setValue({ x, y: 0 });
        } else {
          this.setState({...this.state, isOpening: false});
        }
      },
      onPanResponderRelease: (event, gesture) => {
        this.position.flattenOffset(); // adding animated value to the offset value then it reset the offset to 0.
        this.setState({...this.state, isOpening: false});
        if (gesture.dx > 0) {
          this.userSwipedRight(gesture);
        } else {
          this.userSwipedLeft(gesture);
        }
      },
      onPanResponderTerminate: () => {
        Animated.spring(this.position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        }).start();
      }
    });

    this.position = position;
    this.panResponder = panResponder;
  }

  getLeftItemDynamicStyle() {
    const opacity = this.position.x.interpolate({
      inputRange: [35, 215, 320],
      outputRange: [1, 1, 0.25]
    });
    const width = this.position.x.interpolate({
      inputRange: [0, 70],
      outputRange: [0, 70]
    });
    return {
      opacity,
      width
    };
  }

  resetPosition() {
    Animated.timing(this.position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
      duration: 200
    }).start();
  }

  completeSwipe(dimension: string) {
    const x = dimension === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      useNativeDriver: false,
      duration: FORCING_DURATION
    }).start(() => this.props.cleanFromScreen(this.props.id));
  }

  enableScrollView(isEnabled: boolean) {
    if (this.scrollView !== isEnabled) {
      this.props.swipingCheck(isEnabled);
      this.scrollView = isEnabled;
    }
  }

  userSwipedLeft(gesture: PanResponderGestureState) {
    if (gesture.dx <= -(RIGHT_BUTTON_THRESHOLD)) {
      this.showButton('left');
    } else {
      this.resetPosition();
    }
  }

  userSwipedRight(gesture: PanResponderGestureState) {
    if (gesture.dx >= FORCE_TO_OPEN_THRESHOLD) {
      this.completeSwipe('right');
    } else {
      this.resetPosition();
    }
  }

  showButton(side: string) {
    const x = side === 'right' ? SCREEN_WIDTH / 4 : -SCREEN_WIDTH / 2.5; // 4 from 4.5 // BURASI DEĞİŞTİRİLECEK
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      useNativeDriver: false,
      duration: 400,
      easing: Easing.out(Easing.quad)
    }).start(() => this.enableScrollView(false));
  }

  render() {
    const { containerStyle, leftButtonContainer, textContainer } = styles;
    return (
      <View style={containerStyle}>
        <Animated.View // LEFT ITEM
          style={[leftButtonContainer, this.getLeftItemDynamicStyle()]}
        >
          {this.props.renderLeftItem(this.state.isOpening, this.state.isSwipeComplete)}
        </Animated.View>
        <Animated.View // MAIN ITEM
          style={[textContainer, this.position.getLayout()]}
          {...this.panResponder.panHandlers}
        >
          {this.props.renderMainItem()}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftButtonContainer: {
    position: 'absolute',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    width: SCREEN_WIDTH / 1.03,
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
    zIndex: 2
  },
  textStyle: {
    fontSize: 17
  },
});

export default SwipeableListItem;
