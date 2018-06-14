import React from 'react';
import { connect } from 'react-redux';
import { grow } from '../store/actions';

const Grow = ({ available, cost, onClick }) => (
  <div className='action'>
    <button id='grow-control' onClick={onClick} disabled={!available}>Grow</button>
    <label>Cost: {cost}</label>
  </div>
);

const mapStateToProps = (state) => {
  return {
    available: state.body.mass > state.cost.grow,
    size: state.body.size,
    cost: state.cost.grow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(grow())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grow);
