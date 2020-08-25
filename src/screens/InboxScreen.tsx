import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from "@aws-amplify/api";
import { NavigationEvents } from "@react-navigation/compat";
import {onCreateTodo, onDeleteTodo} from "../graphql/subscriptions";
import {Context as TodoContext } from "../contexts/todoContext";
import { List } from 'react-native-paper';
import {StackParamList} from "./types";
import {StackNavigationProp} from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import TodoListItem from "../components/TodoListItem";
import {SwipeListView} from "react-native-swipe-list-view";
import TodoListItemBackword from "../components/TodoListItemBackword";

type InboxScreenNavigationProp = StackNavigationProp<StackParamList, 'InboxScreen'>
type InboxScreenRouteProp = RouteProp<StackParamList, 'MenuScreen'>

interface InboxScreenProps {
  navigation: InboxScreenNavigationProp,
  route: InboxScreenRouteProp;
};

const InboxScreen: React.FC<InboxScreenProps> = ({navigation}) => {
  const {state:{todos}, fetchTodos} = useContext(TodoContext);
  const [isLeftOpen, setLeftOpen] = useState(false);


  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchTodos}/>
      <SwipeListView
        data={todos}
        keyExtractor={item => item.id}
        disableLeftSwipe={true}
        leftActionValue={12}
        rightActionValue={-12}
        onLeftAction={() => {
          console.log('left open');
          setLeftOpen(true)
        }}
        onRightAction={() => {
          console.log('right open');
          setLeftOpen(true)
        }}
        renderItem={(data, rowMap) => {
          return (
            <TodoListItem name={data.item.name}/>
          )
        }}
        renderHiddenItem={ (data, rowMap) => (
          <TodoListItemBackword isOpen={isLeftOpen}/>
        )}
      />
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