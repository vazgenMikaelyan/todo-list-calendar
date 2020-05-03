import { TODO_ADD } from './types'

const addTodoAction = (newTodo) => ({
  type: TODO_ADD,
  payload: {...newTodo}
})

export default addTodoAction; 