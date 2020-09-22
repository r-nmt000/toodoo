/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        todos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLabel = /* GraphQL */ `
  query GetLabel($id: ID!) {
    getLabel(id: $id) {
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
export const listLabels = /* GraphQL */ `
  query ListLabels(
    $filter: ModelLabelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        todos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodoLabel = /* GraphQL */ `
  query GetTodoLabel($id: ID!) {
    getTodoLabel(id: $id) {
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
export const listTodoLabels = /* GraphQL */ `
  query ListTodoLabels(
    $filter: ModelTodoLabelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoLabels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        todo {
          id
          name
          completed
          dueDateTime
          createdAt
          updatedAt
        }
        label {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
