import { combineReducers } from 'redux';
import { EAT, GROW, MUTATE } from './actions';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    body: bodyreducer,
    cost: cost,
    income: income,

    ...asyncReducers
  });
};

const bodyreducer = (body = {}, action) => {
  switch (action.type) {
    case EAT:
      return { ...body, mass: body.mass + body.size };
    case GROW:
    case MUTATE:
      return { ...action.body };
    default:
      return body;
  }
};

const cost = (cost = {}, action) => {
  switch (action.type) {
    case GROW:
      return { ...cost, grow: action.cost };
    case MUTATE:
      return { ...cost, mutate: action.cost };
    default:
      return cost;
  }
};

const income = (income = {}) => {
  return income;
};

export default makeRootReducer;
