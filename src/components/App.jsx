import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider, connect  } from 'react-redux'
import PropTypes from 'prop-types'
import { eat } from '../store/actions';



const App = ({ count, onClick}) => (
  <div>
    <label>Mass: {count}</label>
    <button onClick={onClick}>Eat</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    count: state.count
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
