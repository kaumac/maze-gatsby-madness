import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

const Counter = ({ count, increment }) => (
  <div>
    {!count && (
      <div style={{ backgroundColor: 'green' }}>
        <div style={{ backgroundColor: 'yellow' }}>
          <p>Hello, count is undefined 😢</p>
        </div>
      </div>
    )}
    {count && (
      <div style={{ backgroundColor: 'red' }}>
        <div style={{ backgroundColor: 'pink' }}>
          <p>Hello Again, count is {count}</p>
        </div>
      </div>
    )}
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h3>Redux example</h3>
        </Link>
        <ConnectedCounter />
        {this.props.children}
      </div>
    )
  }
}

export default DefaultLayout
