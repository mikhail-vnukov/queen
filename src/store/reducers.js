import { combineReducers } from 'redux'
import locationReducer from './location'
import { EAT } from './actions';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    count: count,
    ...asyncReducers
  })
}

function count(count = 0, action) {
  switch (action.type) {
    case EAT:
      return count+1;
    default:
      return count
  }
}


export default makeRootReducer
