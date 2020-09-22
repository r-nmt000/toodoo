import React, {RefObject, useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import CustomBottomSheet from "./CustomBottomSheet";
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import { Context as EditTodoBottomSheetContext } from "../contexts/editTodoBottomSheetContext";
import EditTodoBottomSheetContent from "./EditTodoBottomSheetContent";

interface EditTodoBottomSheetProps {
}

const EditTodoBottomSheet: React.FC<EditTodoBottomSheetProps> = (props) => {
  const {state, init, closeBottomSheet} = useContext(EditTodoBottomSheetContext);

  // @ts-ignore
  const bottomSheetRef = useRef<CustomBottomSheet>();
  const contentRef = useRef<EditTodoBottomSheetContent>();
  let fall = new Animated.Value(1);

  useEffect(() => {
    init(bottomSheetRef, contentRef);
  }, []);

  const renderShadow = (bs: RefObject<BottomSheet>) => {
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
          bs.current!.snapTo(1)
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
          renderContent={() => { return <EditTodoBottomSheetContent ref={contentRef}/>}}
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

export default EditTodoBottomSheet;
