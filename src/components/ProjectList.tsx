import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { List } from 'react-native-paper';
import Collapsible from "react-native-collapsible";
import {Project} from "../contexts/projectContext";
import { Context as ProjectContext } from "../contexts/projectContext";
import { Context as NewProjectBottomSheetContext } from "../contexts/newProjectBottomSheetContext";
import ProjectListHeader from "./ProjectListHeader";
import {StackNavigationProp} from "@react-navigation/stack";
import {StackParamList} from "../screens/types";

type MenuScreenNavigationProp = StackNavigationProp<StackParamList, 'MenuScreen'>
interface ProjectListProps {
  navigation: MenuScreenNavigationProp,
}

const ProjectList: React.FC<ProjectListProps> = ({navigation}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const {state: {projects}, fetchProjects} = useContext(ProjectContext);
  const {openBottomSheet} = useContext(NewProjectBottomSheetContext);

  const toggleCollapsed = (): void => {
    setCollapsed(!isCollapsed);
  };

  const renderProjects = () => {
    return projects.map((project:Project) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProjectTodoScreen', {id: project.id})
          }}
        >
          <List.Item
            key={project.id}
            title={project.name}
            left={props => <List.Icon {...props} style={styles.newProjectIcon} icon="circle"/>}
          />

        </TouchableOpacity>
      );
    });

  };

  useEffect(() => {
    fetchProjects();
  }, [projects]);

  return (
    <>
      <TouchableOpacity
        onPress={toggleCollapsed}
      >
        <ProjectListHeader isCollapsed={isCollapsed}/>
      </TouchableOpacity>
      <Collapsible
        collapsed={isCollapsed}
      >
        {renderProjects()}
        <List.Item
          title="New project"
          titleStyle={styles.newProjectTitle}
          left={props => <List.Icon {...props} style={styles.newProjectIcon} icon="plus"/>}
          onPress={openBottomSheet}
        />
      </Collapsible>
    </>
  );
};

const styles = StyleSheet.create({
  projectListHeader: {
    fontWeight: "600",
  },
  projectListItemTitle: {

  },
  newProjectTitle: {
    marginLeft: 0,
    paddingLeft: 0,
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  newProjectIcon: {
    width: 24,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    // borderColor: 'gray',
    // borderWidth: 1,
  }
});

export default ProjectList;