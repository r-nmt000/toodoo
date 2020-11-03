import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackParamList} from "../types";
import {StackNavigationProp} from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import { Context as TodoContext } from "../../contexts/todoContext";
import {NavigationEvents} from "@react-navigation/compat";

type ProjectTodoScreenNavigationProp = StackNavigationProp<StackParamList, 'ProjectTodoScreen'>;
type ProjectTodoScreenRouteProp = RouteProp<StackParamList, 'ProjectTodoScreen'>;
interface ProjectTodoScreenProps {
  navigation: ProjectTodoScreenNavigationProp,
  route: ProjectTodoScreenRouteProp,
  filterCondition: string,
  title: string,
}

const ProjectTodoScreen: React.FC<ProjectTodoScreenProps> = (props) => {
  const {state: {todos}, fetchTodos} = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchTodos}/>
      {/*<TodoList data={todos}/>*/}
      <Text>aaaa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

export default ProjectTodoScreen;
