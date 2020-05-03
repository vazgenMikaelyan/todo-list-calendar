import { todoList } from '../initialTodos'

const todoReduser = (state = todoList, action) => {
  switch (action.type) {
   
    case 'TODO_ADD':
      return state.concat({...action.payload});

    case 'TODO_REMOVE':
      return state.filter(todo => todo.id !== action.payload.id);

    case 'TODO_COMPLETE':
      return state.map(todo => {
        if(todo.id === action.payload.id){
          todo.complete = !todo.complete;
        }
        return todo;
      });
      
    case 'TODO_SEARCH':
      return state.filter(todo => {
        return todo.title === action.title;
      });

    default:
      return state;
  }
}

export default todoReduser;