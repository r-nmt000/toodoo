import createDataContext from "./createDataContext";
import {Dispatch} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {FetchProject, getProject, listProjects} from "../graphql/queries";
import {createProject, deleteProject, updateProject} from "../graphql/mutations";
import {Todo} from "./todoContext";

export interface Project {
  id?: string;
  name: string;
  todos?: Todo[]
}

enum ActionTypes {
  FETCH_PROJECT,
  FETCH_PROJECTS,
  DELETE_PROJECT,
  ADD_PROJECT,
  EDIT_PROJECT,
}

interface FetchProjectAction {
  type: ActionTypes.FETCH_PROJECT;
  payload: Project[];
}

interface FetchProjectsAction {
  type: ActionTypes.FETCH_PROJECTS;
  payload: Project[];
}

interface DeleteProjectAction {
  type: ActionTypes.DELETE_PROJECT;
  payload: string;
}

interface AddProjectAction {
  type: ActionTypes.ADD_PROJECT;
  payload: Project;
}

interface EditProjectAction {
  type: ActionTypes.EDIT_PROJECT;
  payload: Project;
}

type ProjectAction = FetchProjectAction | FetchProjectsAction | DeleteProjectAction | AddProjectAction | EditProjectAction;

interface ProjectState {
  projects: Project[]
}

const initialState: ProjectState = {
  projects: []
};

const projectReducer = (state: ProjectState, action: ProjectAction):ProjectState => {
  switch(action.type) {
    case ActionTypes.FETCH_PROJECT:
      return {projects: action.payload};
    case ActionTypes.FETCH_PROJECTS:
      return {projects: action.payload};
    case ActionTypes.DELETE_PROJECT:
      const deletedProjectId = action.payload;
      const updatedProjects = state.projects.filter(
        project => project.id !== deletedProjectId);
      return {projects: updatedProjects};
    case ActionTypes.ADD_PROJECT:
      const newProject = action.payload;
      return {projects: [...state.projects, newProject]};
    case ActionTypes.EDIT_PROJECT:
      const editedProjects = state.projects.map(project => project.id === action.payload.id ? action.payload : project);
      return {projects: editedProjects};
    default:
      return state;
  }
};

const fetchProjects = (dispatch: Dispatch<FetchProjectsAction>) => {
  return async () => {
    const response = await API.graphql(graphqlOperation(listProjects));
    dispatch({
      type: ActionTypes.FETCH_PROJECTS,
      // @ts-ignore
      payload: response.data.listProjects.items
    })
  };
};

const fetchProject = (dispatch: Dispatch<FetchProjectAction>) => {
  return async (projectId: string) => {
    const response = await API.graphql(graphqlOperation(getProject, {id: projectId}));
    // @ts-ignore
    const projects = [response.data.getProject];
    dispatch({
      type: ActionTypes.FETCH_PROJECT,
      payload: projects
    })
  };
};

const removeProject = (dispatch: Dispatch<DeleteProjectAction>) => {
  return async (id: string) => {
    const input = {id: id};
    dispatch({
      type: ActionTypes.DELETE_PROJECT,
      payload: id
    });
    await API.graphql(graphqlOperation(deleteProject, {input}));
  }
};

const addProject = (dispatch: Dispatch<AddProjectAction>) => {
  return async (project: Project) => {
    dispatch({
      type: ActionTypes.ADD_PROJECT,
      payload: project
    });
    await API.graphql(graphqlOperation(createProject, {input:project}));
  };
};

const editProject = (dispatch: Dispatch<EditProjectAction>) => {
  return async (project: Project) => {
    const response = await API.graphql(graphqlOperation(updateProject, {input: project}));
    console.log(response);
    dispatch({
      type: ActionTypes.EDIT_PROJECT,
      payload: project
    });
  };
};


export const { Context, Provider } = createDataContext(
  projectReducer,
  {fetchProject, fetchProjects, addProject, removeProject, editProject},
  initialState);
