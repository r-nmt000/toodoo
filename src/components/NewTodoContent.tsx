import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Button, IconButton} from "react-native-paper";

interface NewTodoBottomSheetProps {
}

const NewTodoContent: React.FC<NewTodoBottomSheetProps> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add Todo"
      />
      <View style={styles.row}>
        <Button style={styles.button} mode="outlined" icon="calendar">Today</Button>
        <Button style={styles.button} mode="outlined" icon="inbox">Inbox</Button>
      </View>
      <View style={StyleSheet.flatten([styles.row, styles.spaceBetween])}>
        <View style={styles.row}>
          <IconButton icon="tag-outline"/>
          <IconButton icon="flag-variant-outline"/>
          <IconButton icon="alarm-check"/>
          <IconButton icon="comment-outline"/>
        </View>
        <View style={styles.row}>
          <IconButton icon="arrow-up-circle-outline"/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    paddingTop: 8,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: 'flex'
  },
  button: {
    marginRight: 8
  },
  input: {
    height: 40,
    fontSize: 16,
    marginLeft: 16,
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  surround: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  iconButton: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  test1: {
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  test2: {
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'red',
  }
});

const testFlatten = StyleSheet.flatten([styles.test1, styles.test2, styles.row]);

export default NewTodoContent;