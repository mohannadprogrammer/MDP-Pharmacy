import {combineReducers} from 'redux'


//import
import items from './items'
import {sales} from './sale'
const rootReducers = combineReducers({
    items,
    sales
})

export default rootReducers;