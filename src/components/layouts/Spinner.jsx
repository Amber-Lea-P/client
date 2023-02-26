import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const Spinner = (props) => {
  return (
    <div>Spinner</div>
  )
}

Spinner.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner)