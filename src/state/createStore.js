import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count - 1,
    })
  }
  return state
}

const initialState = { count: typeof window === 'undefined' ? 0 : 5 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
