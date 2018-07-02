/*
 * action types
 */

export const EAT = 'EAT';
export const FEED = 'FEED';

export const GROW = 'GROW';
export const MUTATE = 'MUTATE';
export const REFLEX = 'REFLEX';

export const TIMER_START = 'TIMER_START';

/*
 * action creators
 */
export const eat = () => ({ type: EAT });
export const feed = () => ({ type: FEED });

export const grow = () => {
  return (dispatch, getState) => {
    let { cost, body } = getState();
    if (cost.grow < body.mass) {
      dispatch({
        type: GROW,
        cost: cost.grow * 2,
        body: {
          size: body.size + 1,
          mass: body.mass - cost.grow
        }
      });
    }
  };
};

export const mutate = () => {
  return (dispatch, getState) => {
    let { cost, body } = getState();
    if (cost.mutate < body.mass) {
      dispatch({
        type: MUTATE,
        cost: cost.mutate * 2,
        body: {
          size: body.size + 2,
          mass: body.mass - cost.mutate
        }
      });
    }
  };
};

export const reflexes = () => {
  return (dispatch, getState) => {
    let { cost, body } = getState();
    if (cost.reflexes < body.mass) {
      dispatch({
        type: REFLEX,
        cost: cost.reflexes * 2,
        body: {
          size: body.size + 2,
          mass: body.mass - cost.reflexes,
          speed: body.speed + 1
        }
      });
    }
  };
};
