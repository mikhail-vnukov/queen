import React from 'react';
import { connect } from 'react-redux';
import { grow } from 'store/actions';
import { PropTypes } from 'prop-types';

const Grow = ({ available, cost, onClick }) => (
  <div className='action'>
    <a href='javascript:void();' id='grow-control' onClick={onClick} className={!available ? 'disabled' : ''}>Grow</a>
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

Grow.propTypes = {
  available: PropTypes.bool.isRequired,
  cost: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grow);
