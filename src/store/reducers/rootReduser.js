import { combineReducers } from 'redux'
import todoReduser from './todoReduser';
import dateReduser from './dateReduser';

const redusers = combineReducers({
    date:dateReduser,
    todos:todoReduser,
});
export default redusers;