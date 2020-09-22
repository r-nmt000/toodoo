/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  completed: boolean,
  dueDateTime?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  todoProjectId?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  dueDateTime?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  completed?: boolean | null,
  dueDateTime?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  todoProjectId?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
};

export type DeleteProjectInput = {
  id?: string | null,
};

export type CreateLabelInput = {
  id?: string | null,
  name: string,
};

export type ModelLabelConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelLabelConditionInput | null > | null,
  or?: Array< ModelLabelConditionInput | null > | null,
  not?: ModelLabelConditionInput | null,
};

export type UpdateLabelInput = {
  id: string,
  name?: string | null,
};

export type DeleteLabelInput = {
  id?: string | null,
};

export type CreateTodoLabelInput = {
  id?: string | null,
  todoLabelTodoId?: string | null,
  todoLabelLabelId?: string | null,
};

export type ModelTodoLabelConditionInput = {
  and?: Array< ModelTodoLabelConditionInput | null > | null,
  or?: Array< ModelTodoLabelConditionInput | null > | null,
  not?: ModelTodoLabelConditionInput | null,
};

export type UpdateTodoLabelInput = {
  id: string,
  todoLabelTodoId?: string | null,
  todoLabelLabelId?: string | null,
};

export type DeleteTodoLabelInput = {
  id?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  dueDateTime?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelLabelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelLabelFilterInput | null > | null,
  or?: Array< ModelLabelFilterInput | null > | null,
  not?: ModelLabelFilterInput | null,
};

export type ModelTodoLabelFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelTodoLabelFilterInput | null > | null,
  or?: Array< ModelTodoLabelFilterInput | null > | null,
  not?: ModelTodoLabelFilterInput | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    dueDateTime: string | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    labels:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    dueDateTime: string | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    labels:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    dueDateTime: string | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    labels:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject:  {
    __typename: "Project",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        completed: boolean,
        dueDateTime: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        completed: boolean,
        dueDateTime: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        completed: boolean,
        dueDateTime: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLabelMutationVariables = {
  input: CreateLabelInput,
  condition?: ModelLabelConditionInput | null,
};

export type CreateLabelMutation = {
  createLabel:  {
    __typename: "Label",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLabelMutationVariables = {
  input: UpdateLabelInput,
  condition?: ModelLabelConditionInput | null,
};

export type UpdateLabelMutation = {
  updateLabel:  {
    __typename: "Label",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLabelMutationVariables = {
  input: DeleteLabelInput,
  condition?: ModelLabelConditionInput | null,
};

export type DeleteLabelMutation = {
  deleteLabel:  {
    __typename: "Label",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoLabelMutationVariables = {
  input: CreateTodoLabelInput,
  condition?: ModelTodoLabelConditionInput | null,
};

export type CreateTodoLabelMutation = {
  createTodoLabel:  {
    __typename: "TodoLabel",
    id: string,
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      dueDateTime: string | null,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      labels:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    label:  {
      __typename: "Label",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoLabelMutationVariables = {
  input: UpdateTodoLabelInput,
  condition?: ModelTodoLabelConditionInput | null,
};

export type UpdateTodoLabelMutation = {
  updateTodoLabel:  {
    __typename: "TodoLabel",
    id: string,
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      dueDateTime: string | null,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      labels:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    label:  {
      __typename: "Label",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoLabelMutationVariables = {
  input: DeleteTodoLabelInput,
  condition?: ModelTodoLabelConditionInput | null,
};

export type DeleteTodoLabelMutation = {
  deleteTodoLabel:  {
    __typename: "TodoLabel",
    id: string,
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      dueDateTime: string | null,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      labels:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    label:  {
      __typename: "Label",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    dueDateTime: string | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    labels:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      dueDateTime: string | null,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      labels:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject:  {
    __typename: "Project",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        completed: boolean,
        dueDateTime: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLabelQueryVariables = {
  id: string,
};

export type GetLabelQuery = {
  getLabel:  {
    __typename: "Label",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLabelsQueryVariables = {
  filter?: ModelLabelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLabelsQuery = {
  listLabels:  {
    __typename: "ModelLabelConnection",
    items:  Array< {
      __typename: "Label",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTodoLabelQueryVariables = {
  id: string,
};

export type GetTodoLabelQuery = {
  getTodoLabel:  {
    __typename: "TodoLabel",
    id: string,
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      dueDateTime: string | null,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      labels:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    label:  {
      __typename: "Label",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodoLabelsQueryVariables = {
  filter?: ModelTodoLabelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodoLabelsQuery = {
  listTodoLabels:  {
    __typename: "ModelTodoLabelConnection",
    items:  Array< {
      __typename: "TodoLabel",
      id: string,
      todo:  {
        __typename: "Todo",
        id: string,
        name: string,
        completed: boolean,
        dueDateTime: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null,
      label:  {
        __typename: "Label",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    dueDateTime: string | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    labels:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    dueDateTime: string | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    labels:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    completed: boolean,
    dueDateTime: string | null,
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    labels:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        completed: boolean,
        dueDateTime: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        completed: boolean,
        dueDateTime: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoConnection",
      items:  Array< {
        __typename: "Todo",
        id: string,
        name: string,
        completed: boolean,
        dueDateTime: string | null,
        createdAt: string | null,
        updatedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLabelSubscription = {
  onCreateLabel:  {
    __typename: "Label",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLabelSubscription = {
  onUpdateLabel:  {
    __typename: "Label",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLabelSubscription = {
  onDeleteLabel:  {
    __typename: "Label",
    id: string,
    name: string,
    todos:  {
      __typename: "ModelTodoLabelConnection",
      items:  Array< {
        __typename: "TodoLabel",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoLabelSubscription = {
  onCreateTodoLabel:  {
    __typename: "TodoLabel",
    id: string,
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      dueDateTime: string | null,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      labels:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    label:  {
      __typename: "Label",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoLabelSubscription = {
  onUpdateTodoLabel:  {
    __typename: "TodoLabel",
    id: string,
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      dueDateTime: string | null,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      labels:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    label:  {
      __typename: "Label",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoLabelSubscription = {
  onDeleteTodoLabel:  {
    __typename: "TodoLabel",
    id: string,
    todo:  {
      __typename: "Todo",
      id: string,
      name: string,
      completed: boolean,
      dueDateTime: string | null,
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      labels:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null,
    label:  {
      __typename: "Label",
      id: string,
      name: string,
      todos:  {
        __typename: "ModelTodoLabelConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
