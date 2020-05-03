import { TODO_COMPLETE } from './types'

const completeTodoAction = (id) => ({
    type: TODO_COMPLETE,
    payload: {
        id: id
    }
})

export default completeTodoAction; 