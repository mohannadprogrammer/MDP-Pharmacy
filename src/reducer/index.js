import {combineReducers} from 'redux'


//import
import items from './items'
import {sales} from './sale'
import {report} from './report'
import {notification}from './notification'
const rootReducers = combineReducers({
    items,
    sales,
    report,
    notification
})

export default rootReducers;