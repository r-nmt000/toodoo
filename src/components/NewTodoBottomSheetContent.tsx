import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';
import {Button, IconButton} from "react-native-paper";
import { API, graphqlOperation } from 'aws-amplify';
import {createTodo} from "../graphql/mutations";
import { Context as TodoContext } from "../contexts/todoContext";

interface NewTodoContentProps {
}

interface NewTodoContentStatus {
  name: string
}

class NewTodoBottomSheetContent extends React.Component<NewTodoContentProps, NewTodoContentStatus>{
  static contextType = TodoContext;
  inputRef = React.createRef<TextInput>();

  state = {
    id: undefined,
    name: ""
  };

  isNameEmpty = (): boolean => {
    if (this.state.name) {
      return false;
    }
    return true;
  };

  addTodo = () => {
    const input = {
      name: this.state.name,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    API.graphql(graphqlOperation(createTodo, {input}));
  };

  updateTodo = () => {
    const input = {
      id: this.state.id,
      name: this.state.name,
    };
    const {editTodo} = this.context;
    editTodo(input);
  };

  clearTitle = () => {
    this.setState({name: ""});
  };

  focusOnInput = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };
  blurInput = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.blur();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={this.inputRef}
          style={styles.input}
          placeholder="Add Todo"
          value={this.state.name}
          onChangeText={text => this.setState({name:text})}
          onKeyPress={({nativeEvent: {key}}) => {
            console.log('onkeypress called');
            console.log(key);
            if (key === 'Enter') {
              console.log('enter is pressed');
              this.addTodo();
              this.clearTitle();
            }
          }}
        />
        <View style={styles.row}>
          <Button style={styles.button} mode="outlined" icon="calendar">Today</Button>
          <Button style={styles.button} mode="outlined" icon="inbox">Inbox</Button>
        </View>
        <View style={StyleSheet.flatten([styles.row, styles.spaceBetween])}>
          <View style={styles.row}>
            <IconButton color="gray" icon="tag-outline"/>
            <IconButton color="gray" icon="flag-variant-outline"/>
            <IconButton color="gray" icon="alarm-check"/>
            <IconButton color="gray" icon="comment-outline"/>
          </View>
          <View style={styles.row}>
            <IconButton
              disabled={this.isNameEmpty()}
              icon="arrow-up-circle-outline"
              size={32}
              onPress={() => {
                if (this.state.id) {
                  this.updateTodo();
                } else {
                  this.addTodo();
                }
                this.clearTitle();
              }}
            />
          </View>
        </View>
      </View>
    );
  };
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

export default NewTodoBottomSheetContent;