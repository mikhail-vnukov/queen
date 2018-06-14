/*
 * action types
 */

export const EAT = 'EAT';
export const GROW = 'GROW';
export const MUTATE = 'MUTATE';

/*
 * action creators
 */

export const eat = () => ({ type: EAT });

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
        } });
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

