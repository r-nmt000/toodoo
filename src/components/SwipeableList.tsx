import React, {useLayoutEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView, LayoutAnimation, UIManager} from 'react-native';
import SwipeableListItem from "./SwipeableListItem";
import TodoListLeftItem from "./TodoListLeftItem";
import TodoListItem from "./TodoListItem";

export interface Item {
  id: string;
  name: string;
}

interface SwipeableListProps {
  data: Item[];
  selectItem: (id: string, ...props: any[]) => void;
  cleanFromScreen: (id: string) => void;
}

const SwipeableList: React.FC<SwipeableListProps> = ({data, selectItem, cleanFromScreen}) => {
  const [swiping, setSwiping] = useState(false);

  useLayoutEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.easeInEaseOut();
  }, [data]);

  const renderItems = () => {
    return data.map((item) => {
      return (
        <SwipeableListItem
          id={item.id}
          key={item.id}
          cleanFromScreen={(id) => cleanFromScreen(id)}
          swipingCheck={(swiping) => setSwiping(swiping)}
          message={item.name}
          renderMainItem={ () => {
            return <TodoListItem
              name={item.name}
              onPress={() => {
                selectItem(item.id, item.name);
              }}
            />
          }}
          renderLeftItem={ (isOpening: boolean, isSwipeComplete: boolean) => {
            return <TodoListLeftItem isOpening={isOpening} isTodoDone={isSwipeComplete}/>
          }}
          renderRightItem={ () => {
            return <Text>aaa</Text>
          }}
        />
      );
    });
  };
  return (
    <ScrollView
      scrollEnabled={!swiping}
    >
      {renderItems()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SwipeableList;