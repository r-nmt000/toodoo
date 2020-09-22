import createDataContext from "./createDataContext";
import {Dispatch, RefObject} from "react";
import BottomSheet from "reanimated-bottom-sheet";
import {Todo} from "./todoContext";
import EditTodoBottomSheetContent from "../components/EditTodoBottomSheetContent";

interface InitAction {
  type: ActionTypes.INIT;
  payload: {bottomSheetRef:RefObject<BottomSheet>, editTodoContentRef:RefObject<EditTodoBottomSheetContent>};
}

interface SelectTodoAction {
  type: ActionTypes.SELECT_TODO;
  payload: Todo;
}

interface CloseBottomSheetAction {
  type: ActionTypes.CLOSE_BOTTOMSHEET;
}

type Action = InitAction | SelectTodoAction | CloseBottomSheetAction;

enum ActionTypes {
  INIT,
  SELECT_TODO,
  CLOSE_BOTTOMSHEET,
}

interface State {
  bottomSheetRef?: RefObject<BottomSheet>;
  editTodoContentRef?: RefObject<EditTodoBottomSheetContent>
  selectedTodo?: Todo;
  isBottomSheetOpen: boolean;
}

const initialState: State = {
  isBottomSheetOpen: false,
};

const editTodoBottomSheetReducer = (state: State, action: Action):State => {
  switch(action.type) {
    case ActionTypes.INIT:
      return {bottomSheetRef: action.payload.bottomSheetRef, editTodoContentRef: action.payload.editTodoContentRef, isBottomSheetOpen: false};
    case ActionTypes.SELECT_TODO:
      state.bottomSheetRef!.current!.snapTo(0);
      state.editTodoContentRef!.current!.setState({id: action.payload.id, name: action.payload.name});
      return {...state, selectedTodo: action.payload, isBottomSheetOpen: true};
    case ActionTypes.CLOSE_BOTTOMSHEET:
      return {...state, isBottomSheetOpen: false};
    default:
      return state;
  }
};

const init = (dispatch: Dispatch<InitAction>) => {
  return async (bottomSheetRef: RefObject<BottomSheet>, editTodoContentRef: RefObject<EditTodoBottomSheetContent>) => {
    dispatch({
      type: ActionTypes.INIT,
      payload: {bottomSheetRef: bottomSheetRef, editTodoContentRef: editTodoContentRef}
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

const closeBottomSheet = (dispatch: Dispatch<CloseBottomSheetAction>) => {
  return async () => {
    dispatch({
      type: ActionTypes.CLOSE_BOTTOMSHEET,
    })
  };
};

export const { Context, Provider } = createDataContext(
  editTodoBottomSheetReducer,
  {init, selectTodo, closeBottomSheet},
  initialState);
