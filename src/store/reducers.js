import { combineReducers } from 'redux';
import { EAT, GROW, MUTATE, REFLEX, FEED } from './actions';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    body,
    cost,
    income,

    ...asyncReducers
  });
};

const body = (body = {}, action) => {
  switch (action.type) {
    case EAT:
      return { ...body, mass: body.mass + body.size };
    case FEED:
      return { ...body, mass: body.mass + body.speed };
    case GROW:
    case MUTATE:
    case REFLEX:
      return Object.assign({}, body, { ...action.body });
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
    case REFLEX:
      return { ...cost, reflexes: action.cost };
    default:
      return cost;
  }
};

const income = (income = {}) => {
  return income;
};

export default makeRootReducer;
