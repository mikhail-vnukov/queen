import React from 'react';
import { connect } from 'react-redux';
import { mutate } from '../store/actions';
import { PropTypes } from 'prop-types';

const Mutate = ({ available, cost, onClick }) => (
  <div className='action'>
    <a href='javascript:void();' id='mutate-control'
      onClick={onClick} className={!available ? 'disabled' : ''}>Mutate</a>
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

Mutate.propTypes = {
  available: PropTypes.bool,
  cost: PropTypes.number,
  onClick: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mutate);
