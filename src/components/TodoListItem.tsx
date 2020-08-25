import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import { List } from 'react-native-paper';

interface TodoListItemProps {
  name: string;
}

const TodoListItem: React.FC<TodoListItemProps> = ({name}) => {
  return (
    <List.Item
      title={name}
      style={styles.item}
      left={() => <List.Icon style={styles.check} icon="circle-outline"/>}
    />
  )
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white'
  },
  check: {
    // borderColor: 'gray',
    // borderWidth: 1,
  },

});

export default TodoListItem;