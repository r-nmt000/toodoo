import React, {RefObject, useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import CustomBottomSheet from "./CustomBottomSheet";
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import { Context as NewProjectBottomSheetContext } from "../contexts/newProjectBottomSheetContext";
import NewProjectBottomSheetContent from "./NewProjectBottomSheetContent";

interface NewProjectBottomSheetProps {
}

const NewProjectBottomSheet: React.FC<NewProjectBottomSheetProps> = (props) => {
  const {state, init, closeBottomSheet} = useContext(NewProjectBottomSheetContext);

  // @ts-ignore
  const bottomSheetRef = useRef<CustomBottomSheet>();
  const contentRef = useRef<NewProjectBottomSheetContent>();
  let fall = new Animated.Value(1);

  useEffect(() => {
    init(bottomSheetRef, contentRef);
  }, []);

  const renderShadow = (bottomSheetRef: RefObject<BottomSheet>) => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    });

    const getPointerEvents = (): 'none' | 'auto' => {
      if (state.isBottomSheetOpen) {
        return 'auto';
      }
      return 'none';
    };

    return (
      <Animated.View
        onTouchEnd={() => {
          closeBottomSheet();
          bottomSheetRef.current!.snapTo(1)
        }}
        pointerEvents={getPointerEvents()}
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    )
  };
  return (
    <>
      <CustomBottomSheet
        ref={bottomSheetRef}
        snapPoints={[400, 0]}
        initialSnap={1}
        callbackNode={fall}
        enabledContentGestureInteraction={false}
        onCloseStart={() => {
          contentRef.current!.blurInput();
        }}
        renderContent={() => { return <NewProjectBottomSheetContent ref={contentRef}/>}}
      />
      {renderShadow(bottomSheetRef)}
    </>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
});

export default NewProjectBottomSheet;
