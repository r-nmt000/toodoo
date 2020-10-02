import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import TodoListLeftItem from "./TodoListLeftItem";
import TodoListItem from "./TodoListItem";
import {Context as TodoContext, Todo} from "../contexts/todoContext";
import { Context as EditTodoBottomSheetContext } from "../contexts/editTodoBottomSheetContext";
import SwipeableList from "./SwipeableList";

interface TodoListProps {
  todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  const {removeTodo} = useContext(TodoContext);
  const {selectTodo} = useContext(EditTodoBottomSheetContext);

  const _selectItem = (id: string, name: string) => {
    selectTodo({id, name, completed: false});
  };

  const _cleanFromScreen = (id: string) => {
    removeTodo(id);
  };

  return (
    <SwipeableList
      data={todos}
      selectItem={_selectItem}
      cleanFromScreen={_cleanFromScreen}
    />
  );
};

const styles = StyleSheet.create({});

export default TodoList;