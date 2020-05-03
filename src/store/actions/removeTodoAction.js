import { TODO_REMOVE } from './types'

const removeTodoAction = (id) => ({
    type: TODO_REMOVE,
    payload: {
        id: id
    }
})

export default removeTodoAction; 