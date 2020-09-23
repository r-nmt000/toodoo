import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';
import {Button, IconButton} from "react-native-paper";
import { Context as ProjectContext } from "../contexts/projectContext";

interface NewProjectBottomSheetContentProps {
}

interface NewProjectBottomSheetContentStatus {
  id: string
  name: string
}

class NewProjectBottomSheetContent extends React.Component<NewProjectBottomSheetContentProps, NewProjectBottomSheetContentStatus>{
  static contextType = ProjectContext;
  inputRef = React.createRef<TextInput>();

  state = {
    id: "",
    name: ""
  };

  private isNameEmpty = (): boolean => {
    if (this.state.name) {
      return false;
    }
    return true;
  };

  addProject = () => {
    const project = {
      name: this.state.name,
    };
    const {addProject} = this.context;
    addProject(project);
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
          placeholder="Add Project"
          value={this.state.name}
          onChangeText={text => this.setState({name:text})}
          onKeyPress={({nativeEvent: {key}}) => {
            if (key === 'Enter') {
              this.addProject();
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
                this.addProject();
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

export default NewProjectBottomSheetContent;
