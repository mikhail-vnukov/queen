import { combineReducers } from 'redux'
import { EAT, GROW, GREW } from './actions';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    body: bodyreducer,
    cost: cost,
    income: income,

    ...asyncReducers
  })
}

const bodyreducer = (body = {}, action) => {
  switch (action.type) {
    case EAT:
      return { ...body, mass: body.mass + body.size }
    case GROW:
      if (body.mass >= 10) {
        return { mass: body.mass - 10, size: body.size + 1 }
      }
    /* fallthrough */
    default:
      return body
  }
}

const cost = (cost = {}, action) => {
  switch (action.type) {
    case GREW:
      return { ...cost, grow: cost.grow * 1.1 }
    /* fallthrough */
    default:
      return cost
  }
}

const income = (income = {} ) => {
  return income
}

export default makeRootReducer
