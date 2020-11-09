import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux'
import Reducer from './Reducer'
import ReduxThunk from 'redux-thunk'

const reducer = combineReducers(Reducer)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
const enhancer = compose(
	applyMiddleware(ReduxThunk),
	devTools
)
const store = createStore(reducer, enhancer)

export default store
