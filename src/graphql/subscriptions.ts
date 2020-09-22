/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateLabel = /* GraphQL */ `
  subscription OnCreateLabel {
    onCreateLabel {
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
export const onUpdateLabel = /* GraphQL */ `
  subscription OnUpdateLabel {
    onUpdateLabel {
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
export const onDeleteLabel = /* GraphQL */ `
  subscription OnDeleteLabel {
    onDeleteLabel {
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
export const onCreateTodoLabel = /* GraphQL */ `
  subscription OnCreateTodoLabel {
    onCreateTodoLabel {
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
export const onUpdateTodoLabel = /* GraphQL */ `
  subscription OnUpdateTodoLabel {
    onUpdateTodoLabel {
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
export const onDeleteTodoLabel = /* GraphQL */ `
  subscription OnDeleteTodoLabel {
    onDeleteTodoLabel {
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
