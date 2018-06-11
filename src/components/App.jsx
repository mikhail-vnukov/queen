import React from 'react'
import { connect  } from 'react-redux'
import PropTypes from 'prop-types'
import { eat } from '../store/actions'
import Grow from './Grow'

const App = ({ mass, onClick}) => (
  <div>
    <label>Mass: {mass}</label>
    <button onClick={onClick}>Eat</button>
    <Grow />
    
  </div>
)

const mapStateToProps = (state) => {
  return {
    mass: state.body.mass
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
