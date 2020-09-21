import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { List } from 'react-native-paper';

interface TodoListItemProps {
  name: string;
  onPress?: () => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({name, onPress, swiping}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <List.Item
        title={name}
        style={styles.item}
        left={() => <List.Icon style={styles.check} icon="circle-outline"/>}
      />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  item: {
    // borderWidth: 1,
  },
  check: {
    // borderColor: 'gray',
    // borderWidth: 1,
  },

});

export default TodoListItem;