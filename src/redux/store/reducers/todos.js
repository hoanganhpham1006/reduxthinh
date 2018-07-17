import { ADD_TODO, RESET_TODO } from "../actions/todos";

const initState = {
  content: '',
  todosList: []
};

export default reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todosList: [
          ...state.todosList,
          action.payload.todoContent
        ]
      }
    }

    case RESET_TODO: {
      return {
        ...state,
        todosList: []
      }
    }
  }

  return state;
}