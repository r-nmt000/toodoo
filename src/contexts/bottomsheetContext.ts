import createDataContext from "./createDataContext";
import {Dispatch, RefObject} from "react";
import BottomSheet from "reanimated-bottom-sheet";
import {Todo} from "./todoContext";

export interface InitAction {
  type: ActionTypes.INIT;
  payload: RefObject<BottomSheet>;
}

export interface SelectTodoAction {
  type: ActionTypes.SELECT_TODO;
  payload: Todo;
}

export type Action = InitAction | SelectTodoAction;

enum ActionTypes {
  INIT,
  SELECT_TODO,
}

interface State {
  bs?: RefObject<BottomSheet>;
  selectedTodo?: Todo;
}

const initialState: State = {
  bs: undefined,
  selectedTodo: undefined,
};

const bottomsheetReducer = (state: State, action: Action):State => {
  console.log('bottomsheet reducer is called');
  switch(action.type) {
    case ActionTypes.INIT:
      return {bs: action.payload};
    case ActionTypes.SELECT_TODO:
    default:
      return {...state, selectedTodo: action.payload};
  }
};

const init = (dispatch: Dispatch<InitAction>) => {
  return async (bs: RefObject<BottomSheet>) => {
    dispatch({
      type: ActionTypes.INIT,
      payload: bs
    })
  };
};


const selectTodo = (dispatch: Dispatch<SelectTodoAction>) => {
  return async (selectedTodo: Todo) => {
    dispatch({
      type: ActionTypes.SELECT_TODO,
      payload: selectedTodo
    })
  };
};


export const { Context, Provider } = createDataContext(
  bottomsheetReducer,
  {init, selectTodo},
  initialState);
