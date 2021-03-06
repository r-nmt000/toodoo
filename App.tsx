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
import { Provider as NewTodoBottomSheetProvider } from "./src/contexts/newTodoBottomSheetContext";
import { Provider as EditTodoBottomSheetProvider } from "./src/contexts/editTodoBottomSheetContext";
import { Provider as ProjectProvider } from "./src/contexts/projectContext";
import { Provider as NewProjectBottomSheetProvider } from "./src/contexts/newProjectBottomSheetContext";
import {onCreateTodo, } from "./src/graphql/subscriptions";
import NewTodoBottomSheetFAB from "./src/components/NewTodoBottomSheetFAB";
import EditTodoBottomSheet from "./src/components/EditTodoBottomSheet";
import NewProjectBottomSheet from "./src/components/NewProjectBottomSheet";
import ProjectTodoScreen from "./src/screens/projects/ProjectTodoScreen";

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
        <Stack.Screen
          name="ProjectTodoScreen"
          component={ProjectTodoScreen}
        />
      </Stack.Navigator>
      <NewTodoBottomSheetFAB/>
      <EditTodoBottomSheet/>
      <NewProjectBottomSheet/>
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
      <NewProjectBottomSheetProvider>
        <EditTodoBottomSheetProvider>
          <NewTodoBottomSheetProvider>
            <ProjectProvider>
              <TodoProvider>
                <App/>
              </TodoProvider>
            </ProjectProvider>
          </NewTodoBottomSheetProvider>
        </EditTodoBottomSheetProvider>
      </NewProjectBottomSheetProvider>
    </PaperProvider>
  );
}
