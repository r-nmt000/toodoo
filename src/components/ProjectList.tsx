import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { List } from 'react-native-paper';
import {ListItem} from "react-native-elements";
import Collapsible from "react-native-collapsible";
import {Project} from "../contexts/projectContext";
import { Context as ProjectContext } from "../contexts/projectContext";
import { Context as NewProjectBottomSheetContext } from "../contexts/newProjectBottomSheetContext";
import NewProjectBottomSheet from "./NewProjectBottomSheet";

interface ProjectListProps {
}

const ProjectList: React.FC<ProjectListProps> = (props) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const {state: {projects}, fetchProjects} = useContext(ProjectContext);
  const {openBottomSheet} = useContext(NewProjectBottomSheetContext);

  const toggleCollapsed = () => {
    setCollapsed(!isCollapsed);
  };

  const renderProjects = () => {
    return projects.map((project:Project) => {
      return (
        <List.Item
          key={project.id}
          title={project.name}
          left={props => <List.Icon {...props} style={styles.newProjectIcon} icon="circle"/>}
        />
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
        <ListItem
          chevron
          titleStyle={styles.projectListHeader}
          bottomDivider={true}
          title="Projects"
        />
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
      <NewProjectBottomSheet/>
    </>
  );
};

const styles = StyleSheet.create({
  projectListHeader: {
    fontWeight: "bold",
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