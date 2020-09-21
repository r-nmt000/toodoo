import createDataContext from "./createDataContext";
import {Dispatch, RefObject} from "react";
import BottomSheet from "reanimated-bottom-sheet";
import {Todo} from "./todoContext";
import NewTodoContent from "../components/NewTodoContent";

interface InitAction {
  type: ActionTypes.INIT;
  payload: {bs:RefObject<BottomSheet>, newTodoContentRef:RefObject<NewTodoContent>};
}

interface SelectTodoAction {
  type: ActionTypes.SELECT_TODO;
  payload: Todo;
}

interface TapFABAction {
  type: ActionTypes.TAP_FAB;
}

interface CloseBottomSheetAction {
  type: ActionTypes.CLOSE_BOTTOMSHEET;
}

type Action = InitAction | SelectTodoAction | TapFABAction | CloseBottomSheetAction;

enum ActionTypes {
  INIT,
  SELECT_TODO,
  TAP_FAB,
  CLOSE_BOTTOMSHEET,
}

interface State {
  bs?: RefObject<BottomSheet>;
  newTodoContentRef?: RefObject<NewTodoContent>
  selectedTodo?: Todo;
  isBottomSheetOpen: boolean;
}

const initialState: State = {
  isBottomSheetOpen: false,
};

const bottomsheetReducer = (state: State, action: Action):State => {
  console.log('bottomsheet reducer is called');
  switch(action.type) {
    case ActionTypes.INIT:
      console.log('init is called');
      return {bs: action.payload.bs, newTodoContentRef: action.payload.newTodoContentRef, isBottomSheetOpen: false};
    case ActionTypes.SELECT_TODO:
      state.bs!.current!.snapTo(0);
      state.newTodoContentRef!.current!.focusOnInput();
      return {...state, selectedTodo: action.payload, isBottomSheetOpen: true};
    case ActionTypes.TAP_FAB:
      state.bs!.current!.snapTo(0);
      state.newTodoContentRef!.current!.focusOnInput();
      return {...state, isBottomSheetOpen: true};
    case ActionTypes.CLOSE_BOTTOMSHEET:
      return {...state, isBottomSheetOpen: false};
    default:
      return state;
  }
};

const init = (dispatch: Dispatch<InitAction>) => {
  return async (bs: RefObject<BottomSheet>, newTodoContentRef: RefObject<NewTodoContent>) => {
    dispatch({
      type: ActionTypes.INIT,
      payload: {bs, newTodoContentRef}
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

const tapFAB = (dispatch: Dispatch<TapFABAction>) => {
  return async () => {
    dispatch({
      type: ActionTypes.TAP_FAB,
    })
  };
};

const closeBottomSheet = (dispatch: Dispatch<CloseBottomSheetAction>) => {
  return async () => {
    dispatch({
      type: ActionTypes.CLOSE_BOTTOMSHEET,
    })
  };
};


export const { Context, Provider } = createDataContext(
  bottomsheetReducer,
  {init, selectTodo, tapFAB, closeBottomSheet},
  initialState);
