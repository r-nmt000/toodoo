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
          bottomDivider={true}
          title="Project"
        />
      </TouchableOpacity>
      <Collapsible
        collapsed={isCollapsed}
      >
        {renderProjects()}
        <List.Item
          title="Add new project"
          onPress={openBottomSheet}
        />
      </Collapsible>
      <NewProjectBottomSheet/>
    </>
  );
};

const styles = StyleSheet.create({});

export default ProjectList;