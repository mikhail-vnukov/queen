import React from 'react';
import { connect } from 'react-redux';
import { reflexes } from 'store/actions';
import { PropTypes } from 'prop-types';

const Reflexes = ({ available, cost, onClick }) => (
  <div className='action'>
    <a href='javascript:void();' id='reflex-control'
      onClick={onClick} className={!available ? 'disabled' : ''}>Reflexes</a>
    <label>Cost: {cost}</label>
  </div>
);

const mapStateToProps = (state) => {
  return {
    available: state.body.mass > state.cost.reflexes,
    cost: state.cost.reflexes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(reflexes())
  };
};

Reflexes.propTypes = {
  available: PropTypes.bool,
  cost: PropTypes.number,
  onClick: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reflexes);
