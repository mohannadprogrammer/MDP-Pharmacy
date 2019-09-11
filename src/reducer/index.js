import {combineReducers} from 'redux'


//import
import items from './items'
import {sales} from './sale'
import {report} from './report'
const rootReducers = combineReducers({
    items,
    sales,
    report
})

export default rootReducers;