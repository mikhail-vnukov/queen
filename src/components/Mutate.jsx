import React from 'react';
import { connect } from 'react-redux';
import { mutate } from '../store/actions';

const Mutate = ({ available, cost, onClick }) => (
  <div className='action'>
    <button id='mutate-control' onClick={onClick} disabled={!available}>Mutate</button>
    <label>Cost: {cost}</label>
  </div>
);

const mapStateToProps = (state) => {
  return {
    available: state.body.mass > state.cost.mutate,
    cost: state.cost.mutate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(mutate())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mutate);
