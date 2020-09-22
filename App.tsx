import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import Observable from 'zen-observable-ts';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_export from './src/aws-exports';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, Portal, FAB } from 'react-native-paper';
import MenuScreen from "./src/screens/MenuScreen";
import InboxScreen from "./src/screens/InboxScreen";
import TodayScreen from "./src/screens/TodayScreen";
import {StackParamList} from "./src/screens/types";
import { Context as TodoContext, Provider as TodoProvider } from "./src/contexts/todoContext";
import { Provider as NewTodoBottomSheetProvider } from "./src/contexts/bottomsheetContext";
import { Provider as EditTodoBottomSheetProvider } from "./src/contexts/editTodoBottomSheetContext";
import {onCreateTodo, } from "./src/graphql/subscriptions";
import NewTodoBottomSheetFAB from "./src/components/NewTodoBottomSheetFAB";
import EditTodoBottomSheet from "./src/components/EditTodoBottomSheet";

Amplify.configure(aws_export);
const Stack = createStackNavigator<StackParamList>();

const App = () => {
  const { addTodo } = useContext(TodoContext);

  useEffect(() => {
    const createTodoListener = (API.graphql(graphqlOperation(onCreateTodo)) as Observable<object>)
      .subscribe({
        next: (todoData) => {
          // @ts-ignore
          const todo = todoData.value.data.onCreateTodo;
          addTodo(todo);
        }
      });
    return () => {
      if (createTodoListener) {
        createTodoListener.unsubscribe();
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MenuScreen"
      >
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
        />
        <Stack.Screen
          name="InboxScreen"
          component={InboxScreen}
        />
        <Stack.Screen
          name="TodayScreen"
          component={TodayScreen}
        />
      </Stack.Navigator>
      <NewTodoBottomSheetFAB/>
      <EditTodoBottomSheet/>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <PaperProvider>
      <EditTodoBottomSheetProvider>
        <NewTodoBottomSheetProvider>
          <TodoProvider>
            <App/>
          </TodoProvider>
        </NewTodoBottomSheetProvider>
      </EditTodoBottomSheetProvider>
    </PaperProvider>
  );
}
