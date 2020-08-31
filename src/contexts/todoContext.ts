import createDataContext from "./createDataContext";
import {Dispatch} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {ActionTypes} from "./types";
import {listTodos} from "../graphql/queries";
import {deleteTodo} from "../graphql/mutations";

export interface Todo {
  id: string;
  name: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: string;
}

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: Todo;
}

export interface EditTodoAction {
  type: ActionTypes.EDIT_TODO;
  payload: Todo;
}

export type TodoAction = FetchTodosAction | DeleteTodoAction | AddTodoAction | EditTodoAction;

interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: []
};

const todoReducer = (state: TodoState, action: TodoAction):TodoState => {
  console.log('todo reducer is called');
  switch(action.type) {
    case ActionTypes.FETCH_TODOS:
      return {todos: action.payload};
    case ActionTypes.DELETE_TODO:
      const deletedTodoId = action.payload;
      const updatedTodos = state.todos.filter(
        todo => todo.id !== deletedTodoId);
      return {todos: updatedTodos};
    case ActionTypes.ADD_TODO:
      const newTodo = action.payload;
      console.log('addTodo in reducer');
      console.log(newTodo);
      return {todos: [...state.todos, newTodo]};
    case ActionTypes.EDIT_TODO:
      return state;
    default:
      return state;
  }
};

const fetchTodos = (dispatch: Dispatch<FetchTodosAction>) => {
  return async () => {
    const response = await API.graphql(graphqlOperation(listTodos));
    dispatch({
      type: ActionTypes.FETCH_TODOS,
      payload: response.data.listTodos.items
    })
  };
};

const removeTodo = (dispatch: Dispatch<DeleteTodoAction>) => {
  return async (id: string) => {
    const input = {id: id};
    dispatch({
      type: ActionTypes.DELETE_TODO,
      payload: id
    })
    await API.graphql(graphqlOperation(deleteTodo, {input}));
  }
};

const addTodo = (dispatch: Dispatch<AddTodoAction>) => {
  return (todo: Todo) => {
    dispatch({
      type: ActionTypes.ADD_TODO,
      payload: todo
    })
  };
};

const editTodo = (todo: Todo): EditTodoAction => {
  return {
    type: ActionTypes.EDIT_TODO,
    payload: todo
  }
};


export const { Context, Provider } = createDataContext(
  todoReducer,
  {fetchTodos, addTodo, removeTodo},
  initialState);
