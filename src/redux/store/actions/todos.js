export const ADD_TODO = `todos.ADD_TODO`;
export const RESET_TODO = `todos.RESET_TODO`;

export const addTodoAction = (
  todoContent = ``
) => ({
  type: ADD_TODO,
  payload: {
    todoContent
  }
});

export const resetTodoAction = () => ({
  type: RESET_TODO
});