import { SELECT_DATE } from './types'

const selectDateAction = (date) => ({
    type: SELECT_DATE,
    date: date
})

export default selectDateAction; 