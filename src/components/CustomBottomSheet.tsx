/**
 * This is a patch wrapper for the React Native `reanimated-bottom-sheet`.
 *
 * Problems solved:
 * - onCloseEnd was firing as soon as the sheet's mounted, even before its opening. ( https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/136 )
 * - onCloseEnd was not firing on repeated closings. ( https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/183 )
 * - Other open/close events were silent sometimes.
 *
 * How to use:
 * 1. Make sure you have the imported below modules installed.
 * 2. Put this file to your project folder.
 * 3. `import BottomSheet from './ReanimatedBottomSheet_patched'` - import this patched version to where you need the `BottomSheet`.
 * 4. Use the `BottomSheet` as you would normally do.
 */

import React, {useRef} from 'react' // "react": "16.9.0"
import Animated from 'react-native-reanimated' // "react-native-reanimated": "~1.7.0"
import BottomSheet from 'reanimated-bottom-sheet'
const { Value } = Animated;

declare type Props = {
  /**
   * Points for snapping of bottom sheet component. They define distance from bottom of the screen.
   * Might be number or percent (as string e.g. '20%') for points or percents of screen height from bottom.
   */
  snapPoints: (number | string)[];
  /**
   * Determines initial snap point of bottom sheet. Defaults to 0.
   */
  initialSnap: number;
  /**
   * Method for rendering scrollable content of bottom sheet.
   */
  renderContent?: () => React.ReactNode;
  /**
   * Method for rendering non-scrollable header of bottom sheet.
   */
  renderHeader?: () => React.ReactNode;
  /**
   * Defines if bottom sheet could be scrollable by gesture. Defaults to true.
   */
  enabledGestureInteraction?: boolean;
  enabledHeaderGestureInteraction?: boolean;
  enabledContentGestureInteraction?: boolean;
  /**
   * Defines if bottom sheet content responds to taps. Defaults to true.
   */
  enabledContentTapInteraction?: boolean;
  /**
   * When true, clamp bottom position to first snapPoint.
   */
  enabledBottomClamp?: boolean;
  /**
   * When true, sheet will grows up from bottom to initial snapPoint.
   */
  enabledBottomInitialAnimation?: boolean;
  /**
   * If false blocks snapping using snapTo method. Defaults to true.
   */
  enabledManualSnapping?: boolean;
  /**
   * Defines whether it's possible to scroll inner content of bottom sheet. Defaults to true.
   */
  enabledInnerScrolling?: boolean;
  /**
   * Reanimated node which holds position of bottom sheet, where 1 it the highest snap point and 0 is the lowest.
   */
  callbackNode?: Animated.Value<number>;
  /**
   * Reanimated node which holds position of bottom sheet;s content (in dp).
   */
  contentPosition?: Animated.Value<number>;
  /**
   * Reanimated node which holds position of bottom sheet's header (in dp).
   */
  headerPosition?: Animated.Value<number>;
  /**
   * Array of Refs passed to gesture handlers for simultaneous event handling
   */
  simultaneousHandlers?: Array<React.RefObject<any>> | React.RefObject<any>;
  enabledImperativeSnapping?: boolean;
  onOpenStart?: () => void;
  onOpenEnd?: () => void;
  onCloseStart?: () => void;
  onCloseEnd?: () => void;
  callbackThreshold?: number;
  borderRadius?: number;
  highest?: number;
  lowest?: number;
};

export default React.forwardRef<BottomSheet, Props>(
  (
    {
      callbackThreshold = 0.01,
      callbackNode = useRef(new Value(1)).current,
      onOpenStart,
      onOpenEnd,
      onCloseStart,
      onCloseEnd,
      ...rest
    },
    ref
  ) => {

    // Prevent the onCloseEnd firing onMount #fix
    const isCloseEndAllowed = useRef(false);
    function handleOpenStart() {
      isCloseEndAllowed.current = true;
      if (onOpenStart) {
        onOpenStart();
      }

    }
    function handleCloseEnd() {
      if (!isCloseEndAllowed.current) return;
      if (onCloseEnd) {
        onCloseEnd();
      }
    }

    return (
      <BottomSheet
        ref={ref}
        onOpenStart={handleOpenStart}
        onCloseEnd={handleCloseEnd}
        {...{ callbackNode, callbackThreshold, onCloseStart,  ...rest }}
      />
    )
  }
);
