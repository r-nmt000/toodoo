import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackParamList} from "../types";
import {StackNavigationProp} from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import { Context as ProjectContext, Project } from "../../contexts/projectContext";
import {NavigationEvents} from "@react-navigation/compat";
import TodoList from "../../components/TodoList";

type ProjectTodoScreenNavigationProp = StackNavigationProp<StackParamList, 'ProjectTodoScreen'>;
type ProjectTodoScreenRouteProp = RouteProp<StackParamList, 'ProjectTodoScreen'>;
interface ProjectTodoScreenProps {
  navigation: ProjectTodoScreenNavigationProp,
  route: ProjectTodoScreenRouteProp,
  filterCondition: string,
  title: string,
}

const ProjectTodoScreen: React.FC<ProjectTodoScreenProps> = ({route}) => {
  const {state: {projects}, fetchProject} = useContext(ProjectContext);
  const projectId = route.params?.id;
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={() => {fetchProject(projectId)}}/>
      <TodoList todos={projects[0].todos.items || []}/>
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
