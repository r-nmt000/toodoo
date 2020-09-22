/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      completed
      dueDateTime
      project {
        id
        name
        todos {
          nextToken
        }
        createdAt
        updatedAt
      }
      labels {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      completed
      dueDateTime
      project {
        id
        name
        todos {
          nextToken
        }
        createdAt
        updatedAt
      }
      labels {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      completed
      dueDateTime
      project {
        id
        name
        todos {
          nextToken
        }
        createdAt
        updatedAt
      }
      labels {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      todos {
        items {
          id
          name
          completed
          dueDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      todos {
        items {
          id
          name
          completed
          dueDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      todos {
        items {
          id
          name
          completed
          dueDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLabel = /* GraphQL */ `
  mutation CreateLabel(
    $input: CreateLabelInput!
    $condition: ModelLabelConditionInput
  ) {
    createLabel(input: $input, condition: $condition) {
      id
      name
      todos {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLabel = /* GraphQL */ `
  mutation UpdateLabel(
    $input: UpdateLabelInput!
    $condition: ModelLabelConditionInput
  ) {
    updateLabel(input: $input, condition: $condition) {
      id
      name
      todos {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLabel = /* GraphQL */ `
  mutation DeleteLabel(
    $input: DeleteLabelInput!
    $condition: ModelLabelConditionInput
  ) {
    deleteLabel(input: $input, condition: $condition) {
      id
      name
      todos {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTodoLabel = /* GraphQL */ `
  mutation CreateTodoLabel(
    $input: CreateTodoLabelInput!
    $condition: ModelTodoLabelConditionInput
  ) {
    createTodoLabel(input: $input, condition: $condition) {
      id
      todo {
        id
        name
        completed
        dueDateTime
        project {
          id
          name
          createdAt
          updatedAt
        }
        labels {
          nextToken
        }
        createdAt
        updatedAt
      }
      label {
        id
        name
        todos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTodoLabel = /* GraphQL */ `
  mutation UpdateTodoLabel(
    $input: UpdateTodoLabelInput!
    $condition: ModelTodoLabelConditionInput
  ) {
    updateTodoLabel(input: $input, condition: $condition) {
      id
      todo {
        id
        name
        completed
        dueDateTime
        project {
          id
          name
          createdAt
          updatedAt
        }
        labels {
          nextToken
        }
        createdAt
        updatedAt
      }
      label {
        id
        name
        todos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodoLabel = /* GraphQL */ `
  mutation DeleteTodoLabel(
    $input: DeleteTodoLabelInput!
    $condition: ModelTodoLabelConditionInput
  ) {
    deleteTodoLabel(input: $input, condition: $condition) {
      id
      todo {
        id
        name
        completed
        dueDateTime
        project {
          id
          name
          createdAt
          updatedAt
        }
        labels {
          nextToken
        }
        createdAt
        updatedAt
      }
      label {
        id
        name
        todos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
