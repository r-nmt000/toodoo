import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import RotatableChevronIcon from "./RotatableChevronIcon";
import ListHeaderIconSet from "./ListHeaderIconSet";

interface ProjectListHeaderProps {
  isCollapsed: boolean
}

const ProjectListHeader: React.FC<ProjectListHeaderProps> = ({isCollapsed}) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const chevronIconRef = useRef<RotatableChevronIcon>(null);
  useEffect(() => {
    if (isCollapsed) {
      setBackgroundColor("#ffffff");
      chevronIconRef.current!.rotateBack();
    } else {
      setBackgroundColor("#eeeeee");
      chevronIconRef.current!.rotate();
    }

  }, [isCollapsed]);

  return (
    <>
      <List.Item
        title="Projects"
        titleStyle={styles.projectListHeader}
        style={{backgroundColor: backgroundColor}}
        right={props => <ListHeaderIconSet ref={chevronIconRef}/>}
      />
    </>
  );
};

const styles = StyleSheet.create({
  projectListHeader: {
    fontWeight: "600",
  },
});

export default ProjectListHeader;