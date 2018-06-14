import React from 'react'
import { connect  } from 'react-redux'
import PropTypes from 'prop-types'
import { eat } from '../store/actions'
import Grow from './Grow'
import Mutate from './Mutate';

const App = ({ mass, size, onClick}) => (
  <div id='board'>
    <div id='info'>
      <label>Mass: {mass}</label>
      <label>Size: {size}</label>
    </div>
    <button onClick={onClick}>Eat</button>
    <Grow />
    <Mutate />

  </div>
)

const mapStateToProps = (state) => {
  return {
    mass: state.body.mass,
    size: state.body.size
  }
}

App.propTypes = {
  onClick: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {    
    onClick: () => dispatch(eat())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
