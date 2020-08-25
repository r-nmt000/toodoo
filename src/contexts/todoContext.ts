import createDataContext from "./createDataContext";
import {Dispatch} from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import {ActionTypes} from "./types";
import {createTodo} from "../graphql/mutations";
import {listTodos} from "../graphql/queries";

export interface Todo {
  id: number;
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
  payload: number;
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
      return state;
    case ActionTypes.ADD_TODO:
      return state;
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

const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id
  }
};

const addTodo = () => {
  return async (title: string, callback: () => void) => {
    const todo = { title: title, completed: false, createdAt: new Date(), updatedAt: new Date() };
    await API.graphql(graphqlOperation(createTodo, {todo}));
    callback();
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
  {fetchTodos, deleteTodo},
  initialState);
