import { createStore, combineReducers } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

const reducer = combineReducers({})

const store = () => createStore(reducer)

export const wrapper = createWrapper(store, { debug: false })

export default store
