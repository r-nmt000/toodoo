import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from "@react-navigation/compat";
import { Context as TodoContext } from "../contexts/todoContext";
import { StackParamList } from "./types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import SwipeableList from "../components/SwipeableList";
import TodoList from "../components/TodoList";

type InboxScreenNavigationProp = StackNavigationProp<StackParamList, 'InboxScreen'>;
type InboxScreenRouteProp = RouteProp<StackParamList, 'MenuScreen'>;

interface InboxScreenProps {
  navigation: InboxScreenNavigationProp,
  route: InboxScreenRouteProp;
};

const InboxScreen: React.FC<InboxScreenProps> = ({navigation}) => {
  const {state: {todos}, fetchTodos} = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchTodos}/>
      <TodoList todos={todos}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

export default InboxScreen;