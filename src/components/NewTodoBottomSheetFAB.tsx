import React, {RefObject, useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FAB, Portal} from "react-native-paper";
import CustomBottomSheet from "./CustomBottomSheet";
import BottomSheet from 'reanimated-bottom-sheet'
import NewTodoContent from "./NewTodoContent";
import Animated from 'react-native-reanimated'
import { Context as BottomSheetContext } from "../contexts/bottomsheetContext";

interface NewTodoBottomSheetProps {
}

const NewTodoBottomSheetFAB: React.FC<NewTodoBottomSheetProps> = (props) => {
  const {state, init, tapFAB, closeBottomSheet} = useContext(BottomSheetContext);

  // @ts-ignore
  const bs = React.createRef<CustomBottomSheet>();
  const newTodoContentRef = React.createRef<NewTodoContent>();
  let fall = new Animated.Value(1);

  useEffect(() => {
    init(bs, newTodoContentRef);
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
      <Portal>
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => {
            bs.current!.snapTo(0);
            newTodoContentRef.current!.focusOnInput();
            tapFAB();
          }}
        />
        <CustomBottomSheet
          ref={bs}
          snapPoints={[400, 0]}
          initialSnap={1}
          callbackNode={fall}
          enabledContentGestureInteraction={false}
          onCloseStart={() => {
            newTodoContentRef.current!.blurInput();
          }}
          renderContent={() => { return <NewTodoContent ref={newTodoContentRef}/>}}
        />
      </Portal>
      {renderShadow(bs)}

    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 16,
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
});

export default NewTodoBottomSheetFAB;