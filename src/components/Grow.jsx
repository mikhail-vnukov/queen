import React from 'react'
import { connect } from 'react-redux'
import { grow } from '../store/actions'

const Grow = ({ mass, size, cost, onClick }) => {
  if (cost < mass || size > 1) {
    return (
      <div>
        <label>Size: {size}</label>
        <button id='grow-control' onClick={onClick} disabled={cost > mass}>Grow</button>
        <label>Cost: {cost}</label>
      </div>
    )
  } else {
    return (null)
  }
}

const mapStateToProps = (state) => {
  return {
    mass: state.body.mass,
    size: state.body.size,
    cost: state.cost.grow
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(grow())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grow)
