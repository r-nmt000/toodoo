import createDataContext from "./createDataContext";
import {Dispatch, RefObject} from "react";
import BottomSheet from "reanimated-bottom-sheet";
import {Project} from "./projectContext";
import NewProjectBottomSheetContent from "../components/NewProjectBottomSheetContent";

interface InitAction {
  type: ActionTypes.INIT;
  payload: {bottomSheetRef:RefObject<BottomSheet>, newProjectContentRef:RefObject<NewProjectBottomSheetContent>};
}

interface OpenBottomSheetAction {
  type: ActionTypes.OPEN_BOTTOMSHEET;
}

interface CloseBottomSheetAction {
  type: ActionTypes.CLOSE_BOTTOMSHEET;
}

type Action = InitAction | OpenBottomSheetAction | CloseBottomSheetAction;

enum ActionTypes {
  INIT,
  OPEN_BOTTOMSHEET,
  CLOSE_BOTTOMSHEET,
}

interface State {
  bottomSheetRef?: RefObject<BottomSheet>;
  newProjectContentRef?: RefObject<NewProjectBottomSheetContent>
  selectedProject?: Project;
  isBottomSheetOpen: boolean;
}

const initialState: State = {
  isBottomSheetOpen: false,
};

const newProjectBottomSheetReducer = (state: State, action: Action):State => {
  switch(action.type) {
    case ActionTypes.INIT:
      return {bottomSheetRef: action.payload.bottomSheetRef, newProjectContentRef: action.payload.newProjectContentRef, isBottomSheetOpen: false};
    case ActionTypes.OPEN_BOTTOMSHEET:
      state.bottomSheetRef!.current!.snapTo(0);
      state.newProjectContentRef!.current!.focusOnInput();
      return {...state, isBottomSheetOpen: true};
    case ActionTypes.CLOSE_BOTTOMSHEET:
      return {...state, isBottomSheetOpen: false};
    default:
      return state;
  }
};

const init = (dispatch: Dispatch<InitAction>) => {
  return async (bottomSheetRef: RefObject<BottomSheet>, newProjectContentRef: RefObject<NewProjectBottomSheetContent>) => {
    dispatch({
      type: ActionTypes.INIT,
      payload: {bottomSheetRef: bottomSheetRef, newProjectContentRef}
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

const openBottomSheet = (dispatch: Dispatch<OpenBottomSheetAction>) => {
  return async () => {
    dispatch({
      type: ActionTypes.OPEN_BOTTOMSHEET,
    })
  };
};

export const { Context, Provider } = createDataContext(
  newProjectBottomSheetReducer,
  {init, openBottomSheet, closeBottomSheet},
  initialState);
