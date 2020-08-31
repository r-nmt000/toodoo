import React, {useContext, useLayoutEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView, LayoutAnimation, UIManager} from 'react-native';
import SwipeableListItem from "./SwipeableListItem";
import TodoListLeftItem from "./TodoListLeftItem";
import TodoListItem from "./TodoListItem";
import { Context as TodoContext } from "../contexts/todoContext";

export interface Item {
  id: string;
  name: string;
}

interface SwipeableListProps {
  data: Item[];
}

const SwipeableList: React.FC<SwipeableListProps> = ({data}) => {
  const {removeTodo} = useContext(TodoContext);
  const [swiping, setSwiping] = useState(false);
  const cleanFromScreen = async (id: string) => {
    removeTodo(id);
  };

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
            return <TodoListItem name={item.name}/>
          }}
          renderLeftItem={ (isSwipeComplete: boolean) => {
            return <TodoListLeftItem isTodoDone={isSwipeComplete}/>
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